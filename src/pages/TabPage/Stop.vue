<template>
  <div class="tab-page-stop">
    <h1>
      {{ stop.displayName }}
    </h1>
    <span class="line-connections">
      <img
        v-for="(conn, i) in stop.lineConnections" :key="i"
        :src="`/img/lines-icons/dark/${conn.line}.svg`"
      />
    </span>

    <div class="prev-next-stops">
      <ul>
        <li v-for="(prevStop, i) in stop.prevStops.slice().reverse()" :key="i" class="prev-stops">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${prevStop}`">
            <span>
              {{ getStop($route.params.line, prevStop).displayName }}
            </span>
          </router-link>
        </li>
      </ul>
      <ul>
        <li v-for="(nextStop, i) in stop.nextStops.slice().reverse()" :key="i" class="next-stops">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${nextStop}`">
            <span>
              {{ getStop($route.params.line, nextStop).displayName }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>

    <div v-for="([direction, trains], i) in Object.entries(visits).sort((a, b) => (a[0]<b[0]?-1:(a[0]>b[0]?1:0)))" :key="i">
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
      <div v-for="(train, j) in trains" :key="j" class="train">
        <div class="train-code">
          {{ train.code }}
        </div>
        <div class="train-time">
          {{ ((train.time.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div class="train-destination">
          {{ train.destination }}
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopType } from '@/utils/parser'
import { VisitType } from '@/utils/fetcher'

export default Vue.extend({
  name: 'TabPageStop',
  data: () => ({
    stop: {} as StopType,
    visits: {} as { [x: string]: VisitType[] },
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
      this.stop = JSON.parse(
        localStorage.getItem(
          `lines.${this.$route.params.line}.stops`,
        ) as string)[this.$route.params.stop]
      this.fetch()
      this.syncTimer = 0
    },
    getStop (line: string, slugName: string) {
      return JSON.parse(
        localStorage.getItem(`lines.${line}.stops`) as string,
      )[slugName]
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
            // const stopName = trains[0] && trains[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value

            this.visits = {
              ...this.visits,
              ...(trains.reduce(
                (acc: any, visit: any) => {
                  const dir = visit.MonitoredVehicleJourney.DirectionName
                    ? visit.MonitoredVehicleJourney.DirectionName[0].value
                    : ''

                  visit = {
                    destination: visit.MonitoredVehicleJourney.DestinationName[0].value,
                    code: visit.MonitoredVehicleJourney.JourneyNote ? visit.MonitoredVehicleJourney.JourneyNote[0].value : '',
                    time: new Date(visit.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime) ||
                      new Date(visit.MonitoredVehicleJourney.MonitoredCall.AimedDepartureTime),
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
  watch: {
    '$route.params.line': {
      handler () {
        this.update()
        this.visits = {}
      },
      deep: true,
    },
    '$route.params.stop': {
      handler () {
        this.update()
        this.visits = {}
      },
      deep: true,
    },
  },
})
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
}

.tab-page-stop {
  padding: 0 1rem;
}

.line-connections {
  display: inline-block;
}

.line-connections > img {
  width: 2rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  vertical-align: -0.8rem;
}

.prev-next-stops {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
}

.prev-next-stops ul {
  width: 49%;
}

.prev-next-stops li a {
  display: flex;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  background-color: #dfdfdf;
  border-radius: 0.4rem;
  text-align: center;
}
.prev-next-stops a span {
  display: inline-block;
  width: 100%;
  padding: 0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prev-stops a::before {
  content: '〈';
}
.next-stops a::after {
  content: '〉';
}

.train {
  display: flex;
  margin: 0 -1rem;
  min-height: 2.5rem;
  align-items: center;
}

.train:nth-child(even) {
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
  padding: 0.5rem;
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
}

.sync-btn img {
  vertical-align: -0.35rem;
  margin: 0 0.5rem;
}

</style>
