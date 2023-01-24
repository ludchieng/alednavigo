import { getLinesByRef } from '@/utils/localstore/lines'

export type VisitType = {
  id: string,
  lineRef: string,
  line: string,
  operator: string,

  destination: string,

  journeyCode: string,
  trainNumber: string,

  time: Date,

  platform: string,
  arrivalTime: Date,
  arrivalStatus: string,
  departureTime: Date,
  departureStatus: string,
  nonStopPassage: boolean,
  passageTime?: Date,
}

export const fetchTimetables = async (
  mrefs: string[],
  abortSignal: AbortSignal,
  filterBylines: string[] = [],
) => {
  let visits = {}
  const debugData = new Set()
  let count = 0

  return new Promise((resolve) => {
    for (const mref of mrefs) {
      // TODO Cancel fetch on stop change
      fetch(`${process.env.VUE_APP_API_URL}/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:${mref}:`, {
        ...(abortSignal && { signal: abortSignal }),
      })
        .then(res => {
          if (res.status >= 400) return
          return res.json()
        })
        .then(data => {
          ++count
          if (!data) return
          const trains = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit

          visits = {
            ...visits,
            ...(trains.reduce(
              (acc: { [x: string]: [] }, visit: any) => {
                const dir = (visit.MonitoredVehicleJourney.DirectionName && visit.MonitoredVehicleJourney.DirectionName.length > 0)
                  ? visit.MonitoredVehicleJourney.DirectionName[0].value
                  : ''

                const lineRef = visit.MonitoredVehicleJourney.LineRef.value.match(/:(C[0-9]+):/)[1]

                if (process.env.NODE_ENV === 'development') {
                  const line = getLinesByRef()[lineRef].slugName
                  const stop = visit.MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value
                  debugData.add(`${stop} (${line})`)
                }

                visit = formatData(visit)

                if (filterBylines.length > 0 && !filterBylines.includes(visit.line)) {
                  return acc
                }
                return {
                  ...acc,
                  [dir]: [...(acc[dir] || []), visit],
                }
              },
              {},
            )),
          }
          if (count === mrefs.length) {
            resolve({
              visits: Object.entries(visits).sort((a, b) => (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0))),
              updatedAt: new Date(),
              debugData,
            })
          }
        })
    }
  })
}

const formatData = (visit: any) => {
  const mvj = visit?.MonitoredVehicleJourney
  const mvjmc = mvj?.MonitoredCall
  const lineRef = mvj?.LineRef?.value?.match(/:(C[0-9]+):/)?.[1]

  return {
    id: visit?.ItemIdentifier,
    lineRef,
    line: getLinesByRef()?.[lineRef]?.slugName,

    destination: mvj?.DestinationName?.[0]?.value,

    journeyCode: mvj?.JourneyNote?.[0]?.value,
    trainNumber: mvj?.TrainNumbers?.TrainNumberRef?.[0]?.value,

    time: new Date(mvjmc?.ExpectedDepartureTime),

    platform: mvjmc?.ArrivalPlatformName?.value,
    arrivalTime: mvjmc?.ExpectedArrivalTime && new Date(mvjmc.ExpectedArrivalTime),
    arrivalStatus: mvjmc?.ArrivalStatus,
    departureTime: mvjmc?.ExpectedDepartureTime && new Date(mvjmc.ExpectedDepartureTime),
    departureStatus: mvjmc?.DepartureStatus,
    nonStopPassage: false,

    ...(mvj?.OperatorRef?.value?.indexOf('SNCF') !== -1 && formatDataSNCF(visit)),
    ...(mvj?.OperatorRef?.value?.indexOf('RATP') !== -1 && formatDataRATP(visit)),
  }
}

const formatDataSNCF = (visit: any) => {
  const mvj = visit?.MonitoredVehicleJourney
  const mvjmc = mvj?.MonitoredCall
  const trainNumber = mvj?.FramedVehicleJourneyRef?.DatedVehicleJourneyRef?.match(/::(.*)_(:?.*):/)?.[1]
  const nonStopPassage = new Date(mvjmc?.ExpectedArrivalTime).valueOf() - new Date(mvjmc?.ExpectedDepartureTime).valueOf() === 0
  const passageTime = mvjmc?.ExpectedDepartureTime && new Date(mvjmc.ExpectedDepartureTime)
  return {
    operator: 'SNCF',
    ...(trainNumber && { trainNumber }),
    ...(nonStopPassage && passageTime && { nonStopPassage, passageTime }),
  }
}

const formatDataRATP = (visit: any) => {
  const mvj = visit?.MonitoredVehicleJourney
  const trainNumber = mvj?.FramedVehicleJourneyRef?.DatedVehicleJourneyRef?.match(/::RATP\.(.*):/)?.[1]
  return {
    operator: 'RATP',
    ...(trainNumber && { trainNumber }),
  }
}
