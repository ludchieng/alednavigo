import { getLinesByRef } from '@/utils/localstore/lines'

export type VisitType = {
  code: string,
  time: Date,
  destination: string,
}

export const fetchTimetables = async (mrefs: string[], line: string) => {
  let visits = {}
  const debugData = new Set()
  let count = 0

  return new Promise((resolve, reject) => {
    for (const mref of mrefs) {
      // TODO Cancel fetch on stop change
      fetch(`https://idfm-prim.herokuapp.com/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:${mref}:`)
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
                const dir = visit.MonitoredVehicleJourney.DirectionName
                  ? visit.MonitoredVehicleJourney.DirectionName[0].value
                  : ''

                const lineRef = visit.MonitoredVehicleJourney.LineRef.value.match(/:(C[0-9]+):/)[1]

                if (process.env.NODE_ENV === 'development') {
                  const line = getLinesByRef()[lineRef].slugName
                  const stop = visit.MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value
                  debugData.add(`${stop} (${line})`)
                }

                visit = {
                  lineRef,
                  line: getLinesByRef()[lineRef] ? getLinesByRef()[lineRef].slugName : '',
                  destination: visit.MonitoredVehicleJourney.DestinationName[0].value,
                  code: visit.MonitoredVehicleJourney.JourneyNote ? visit.MonitoredVehicleJourney.JourneyNote[0].value : '',
                  time: new Date(visit.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime) ||
                    new Date(visit.MonitoredVehicleJourney.MonitoredCall.AimedDepartureTime),

                  ItemIdentifier: visit.ItemIdentifier,
                  OperatorRef: visit.MonitoredVehicleJourney.OperatorRef.value,
                  StopName: visit.MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value,
                  ArrivalStatus: visit.MonitoredVehicleJourney.MonitoredCall.ArrivalStatus && visit.MonitoredVehicleJourney.MonitoredCall.ArrivalStatus,
                  ExpectedArrivalTime: visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime && new Date(visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime),
                  AimedArrivalTime: visit.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTimeTime && new Date(visit.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTimeTime),
                  DepartureStatus: visit.MonitoredVehicleJourney.MonitoredCall.DepartureStatus && visit.MonitoredVehicleJourney.MonitoredCall.DepartureStatus,
                  ExpectedDepartureTime: visit.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime && new Date(visit.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime),
                  AimedDepartureTime: visit.MonitoredVehicleJourney.MonitoredCall.AimedDepartureTimeTime && new Date(visit.MonitoredVehicleJourney.MonitoredCall.AimedDepartureTimeTime),

                  ArrivalPlatformName: visit.MonitoredVehicleJourney.MonitoredCall.ArrivalPlatformName,
                  DatedVehicleJourneyRef: visit.MonitoredVehicleJourney.FramedVehicleJourneyRef.DatedVehicleJourneyRef && visit.MonitoredVehicleJourney.FramedVehicleJourneyRef.DatedVehicleJourneyRef.match(/::(.*):/),
                  TrainNumbers: visit.MonitoredVehicleJourney.TrainNumbers && visit.MonitoredVehicleJourney.TrainNumbers.TrainNumberRef[0].value,
                  Order: visit.MonitoredVehicleJourney.MonitoredCall.Order,
                  VehicleAtStop: visit.MonitoredVehicleJourney.MonitoredCall.VehicleAtStop,
                }
                if (visit.line !== line) {
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
            resolve({ visits, updatedAt: new Date(), debugData })
          }
        })
    }
  })
}
