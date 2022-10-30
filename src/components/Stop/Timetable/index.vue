<template>
  <div>
    <pre v-if="debugData.size > 0">{{ Array.from(debugData).reduce((acc, line) => acc + `\n${line}`, '') }}</pre>
    <div :class="Object.entries(visitsByDirections).length ? 'fade-show' : 'hide'">
      <div
        v-for="[direction, visits] in visitsByDirections" :key="direction"
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
        <TrainVisits :visits="visits" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import TrainVisits from '@/components/Stop/Timetable/Visits.vue'
import { StopType } from '@/utils/parser'
import { fetchTimetables, VisitType } from '@/utils/fetcher'
import { getLinesByRef } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'StopTimetable',
  components: {
    TrainVisits,
  },
  props: {
    stop: {} as PropType<StopType>,
  },
  data: () => ({
    fetchAbortController: new AbortController(),
    visitsByDirections: [] as [string, VisitType[]][],
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
          this.visitsByDirections = visits
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
      this.visitsByDirections = []
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
