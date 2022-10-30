<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <details v-for="visit in visits" :key="visit.id" class="row">
      <summary class="visit">
        <div class="visit-code">
          {{ visit.journeyCode }}
        </div>
        <div class="visit-time">
          {{ ((visit.time.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div class="visit-destination">
          {{ visit.destination }}
        </div>
      </summary>
      <div class="visit-details">
        line            : {{ visit.line }}<br />
        trainNumber     : {{ visit.trainNumber }}<br />
        arrivalTime     : {{ visit.arrivalTime }}<br />
        departureTime   : {{ visit.departureTime }}<br />
        arrivalStatus   : {{ visit.arrivalStatus }}<br />
        departureStatus : {{ visit.departureStatus }}<br />
        plateform       : {{ visit.plateform }}<br />
        nonStopPassage  : {{ visit.nonStopPassage }}<br />
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VisitType } from '@/utils/fetcher'

export default Vue.extend({
  name: 'StopTimetableVisits',
  props: {
    visits: {} as PropType<VisitType[]>,
  },
})
</script>

<style scoped>

.row {
  margin: 0 -1rem;
}

.visit {
  display: flex;
  min-height: 2.8rem;
  align-items: center;
}

.row:nth-child(even) {
  background-color: #ededed;
}

.visit-code {
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

.visit-time {
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

.visit-destination {
  padding: 0.4rem 0.4rem 0.4rem 0.5rem;
}

.visit-details {
  padding: 0.2rem 0 1rem 1rem;
  font-family: monospace;
  overflow-x: auto;
}

</style>
