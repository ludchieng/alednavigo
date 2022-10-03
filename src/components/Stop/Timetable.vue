<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <div :class="Object.entries(visits).length ? 'fade-show' : 'hide'">
      <div
        v-for="([direction, trains], i) in Object.entries(visits).sort((a, b) => (a[0]<b[0]?-1:(a[0]>b[0]?1:0)))" :key="i"
        class="timetables"
      >
        <h2>{{ direction }}</h2>
        <div class="sync">
          <span class="sync-time">
            {{ syncTimer }}s
          </span>
          <button class="sync-btn" @click="update">
            <img class="icon-settings" src="/img/mui/update.svg" />
            Synchroniser
          </button>
        </div>
        <details v-for="(train, j) in trains" :key="j" class="row">
          <summary class="train">
            <div class="train-code">
              {{ train.code }}
            </div>
            <div class="train-time">
              {{ ((train.time.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
            </div>
            <div class="train-destination">
              {{ train.destination }}
            </div>
          </summary>
          <div class="train-details">
            ExpectedArrivalTime    : {{ train.ExpectedArrivalTime && train.ExpectedArrivalTime.toLocaleTimeString() }}<br />
            AimedArrivalTime       : {{ train.AimedArrivalTime && train.AimedArrivalTime.toLocaleTimeString() }}<br />
            ExpectedDepartureTime  : {{ train.ExpectedDepartureTime && train.ExpectedDepartureTime.toLocaleTimeString() }}<br />
            AimedDepartureTime     : {{ train.AimedDepartureTime && train.AimedDepartureTime.toLocaleTimeString() }}<br />
            ArrivalStatus          : {{ train.ArrivalStatus }}<br />
            DepartureStatus        : {{ train.DepartureStatus }}<br />
            ArrivalPlatformName    : {{ train.ArrivalPlatformName && train.ArrivalPlatformName.value }}<br />
            DatedVehicleJourneyRef : {{ train.DatedVehicleJourneyRef[1] }}<br />
            TrainNumbers           : {{ train.TrainNumbers }}<br />
            Order                  : {{ train.Order }}<br />
            VehicleAtStop          : {{ train.VehicleAtStop }}<br />
          </div>
        </details>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'
import { VisitType } from '@/utils/fetcher'
import { getLinesByRef } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'StopTimetable',
  props: {
    stop: {} as PropType<StopType>,
  },
  data: () => ({
    visits: {} as { [x: string]: any[] },
    debugData: new Set(),
    syncTimer: 0,
    syncInterval: 0,
  }),
  created () {
    this.update()
    this.syncInterval = setInterval(() => {
      ++this.syncTimer
    }, 1000)
  },
  destroyed () {
    clearInterval(this.syncInterval)
  },
  methods: {
    update () {
      this.debugData = new Set()
      this.fetch()
      this.syncTimer = 0
    },
    fetch () {
      const monitoringRefs = this.stop.monitoringRefs
      for (const mref of monitoringRefs) {
        fetch(`https://idfm-prim.herokuapp.com/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:${mref}:`)
          .then(res => {
            if (res.status >= 400) return
            return res.json()
          })
          .then(data => {
            if (!data) return
            const trains = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit

            this.visits = {
              ...this.visits,
              ...(trains.reduce(
                (acc: { [x: string]: [] }, visit: any) => {
                  const dir = visit.MonitoredVehicleJourney.DirectionName
                    ? visit.MonitoredVehicleJourney.DirectionName[0].value
                    : ''

                  const lineRef = visit.MonitoredVehicleJourney.LineRef.value.match(/:(C[0-9]+):/)[1]

                  if (process.env.NODE_ENV === 'development') {
                    const line = this.linesByRef[lineRef].slugName
                    const stop = visit.MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value
                    this.debugData.add(`${stop} (${line})`)
                  }

                  visit = {
                    lineRef,
                    line: this.linesByRef[lineRef] ? this.linesByRef[lineRef].slugName : '',
                    destination: visit.MonitoredVehicleJourney.DestinationName[0].value,
                    code: visit.MonitoredVehicleJourney.JourneyNote ? visit.MonitoredVehicleJourney.JourneyNote[0].value : '',
                    time: new Date(visit.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime) ||
                      new Date(visit.MonitoredVehicleJourney.MonitoredCall.AimedDepartureTime),

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
                  if (visit.line !== this.$route.params.line) {
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
          })
      }
    },
  },
  computed: {
    linesByRef () {
      return getLinesByRef()
    },
  },
  watch: {
    stop () {
      this.visits = {}
      this.update()
    },
  },
})
</script>

<style scoped>
pre {
  overflow: scroll;
}
.timetables {
  margin-top: 1.5rem;
}

.timetables:not(:first-child) {
  margin-top: 2.5rem;
}

h2 {
  margin: 0;
}

.row {
  margin: 0 -1rem;
}

.train {
  display: flex;
  min-height: 2.8rem;
  align-items: center;
}

.row:nth-child(even) {
  background-color: #ededed;
}

.train-code {
  padding: 0.3rem 0.5rem 0.3rem 1rem;
  margin-right: 0.5rem;
  max-width: 2.3rem;
  min-width: 2.3rem; /* Prevents weird shrink */
  background: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  border-radius: 0 0.2rem 0.2rem 0;
}

.train-time {
  background-color: #202b3b;
  color: #ffc700;
  font-size: 1.2rem;
  font-weight: 600;
  min-width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.3rem;
  line-height: 2.2rem;
  text-align: center;
}

.train-destination {
  padding: 0.4rem 0.4rem 0.4rem 0.5rem;
}

.train-details {
  padding: 0.2rem 0 1rem 1rem;
  font-family: monospace;
}

.sync {
  padding: 0.5rem 0;
  color: #656565;
  font-size: 0.9rem;
}

.sync-time {
  display: inline-block;
  width: 3.2rem;
  text-align: right;
}

.sync-btn {
  color: inherit;
  font: inherit;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.sync-btn img {
  vertical-align: -0.35rem;
  margin: 0 0.5rem;
}

.hide {
  opacity: 0;
}
.fade-show {
  opacity: 1;
  transition: .2s;
}

</style>
