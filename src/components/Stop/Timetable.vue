<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <pre v-if="debugData.size > 0">{{ Array.from(debugData).reduce((acc, line) => acc + `\n${line}`, '') }}</pre>
    <div :class="Object.entries(visits).length ? 'fade-show' : 'hide'">
      <div
        v-for="[direction, trains] in visits" :key="direction"
        class="timetables"
      >
        <h2>{{ direction }}</h2>
        <div class="sync">
          <span class="sync-time" :key="updateCounter">
            {{ ((new Date().getTime() - updatedAt.getTime()) / 1000).toFixed(0) }}s
          </span>
          <button class="sync-btn" @click="update">
            <img class="icon-settings" src="/img/mui/update.svg" />
            Synchroniser
          </button>
        </div>
        <details v-for="train in trains" :key="train.ItemIdentifier" class="row">
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
            <strong>{{ train.StopName }}</strong><br />
            {{ train.OperatorRef }}<br />
            ExpectedArrivalTime    : {{ train.ExpectedArrivalTime }}<br />
            AimedArrivalTime       : {{ train.AimedArrivalTime }}<br />
            ExpectedDepartureTime  : {{ train.ExpectedDepartureTime }}<br />
            AimedDepartureTime     : {{ train.AimedDepartureTime }}<br />
            ArrivalStatus          : {{ train.ArrivalStatus }}<br />
            DepartureStatus        : {{ train.DepartureStatus }}<br />
            ArrivalPlatformName    : {{ train.ArrivalPlatformName }}<br />
            DatedVehicleJourneyRef : {{ train.DatedVehicleJourneyRef }}<br />
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
import { fetchTimetables, VisitType } from '@/utils/fetcher'
import { getLinesByRef } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'StopTimetable',
  props: {
    stop: {} as PropType<StopType>,
  },
  data: () => ({
    fetchAbortController: new AbortController(),
    visits: [] as [string, VisitType[]][],
    debugData: new Set(),
    updatedAt: {} as Date,
    updateCounter: 0,
    updateInterval: 0,
  }),
  created () {
    this.update()
    this.updateInterval = setInterval(() => {
      ++this.updateCounter
    }, 1000)
  },
  destroyed () {
    clearInterval(this.updateInterval)
  },
  methods: {
    update () {
      this.debugData = new Set()
      this.fetch()
    },
    fetch () {
      fetchTimetables(this.stop.monitoringRefs, this.fetchAbortController.signal, [this.$route.params.line])
        .then(({ visits, debugData, updatedAt }: any) => {
          this.visits = visits
          this.debugData = debugData
          this.updatedAt = updatedAt
        })
    },
  },
  computed: {
    linesByRef () {
      return getLinesByRef()
    },
  },
  watch: {
    stop () {
      this.visits = []
      this.fetchAbortController.abort()
      this.fetchAbortController = new AbortController()
      this.update()
    },
  },
})
</script>

<style scoped>
pre {
  overflow: auto;
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
  max-width: 2.4rem;
  min-width: 2.4rem; /* Prevents weird shrink */
  background: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  border-radius: 0 0.2rem 0.2rem 0;
  overflow-x: hidden;
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
  overflow-x: auto;
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
