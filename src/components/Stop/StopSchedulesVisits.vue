<template>
  <div>
    <details v-for="visit in visits" :key="visit.id" class="row">
      <summary class="visit">
        <div class="visit-code">
          {{ visit.journeyCode }}
        </div>
        <div v-if="visit.departureStatus === 'cancelled' || visit.arrivalStatus === 'cancelled'"
          class="visit-time visit-time-cancelled"
        >
          &times;
        </div>
        <div v-else-if="visit.nonStopPassage || !visit.departureTime"
          class="visit-time visit-time-shrouded"
          :key="`0-${updateCounter}`"
        >
          {{ ((visit.arrivalTime.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div v-else class="visit-time" :key="`1-${updateCounter}`">
          {{ ((visit.time.valueOf() - Date.now()) / 1000 / 60).toFixed(0) }}
        </div>
        <div class="visit-destination">
          {{ visit.destination }}
        </div>
      </summary>

      <div v-if="visit.operator === 'SNCF' && !visit.nonStopPassage" class="visit-details">
        <StopSchedulesDetailsTimes :visit="visit" />
        <UiSchedulesDetailsRow
          v-if="visit.journeyCode"
          label="Mission"
          :value="visit.journeyCode"
        />
        <UiSchedulesDetailsRow
          v-if="visit.trainNumber"
          label="Train no."
          :value="visit.trainNumber"
        />
      </div>

      <div v-else-if="visit.operator === 'SNCF' && visit.nonStopPassage" class="visit-details">
        <StopSchedulesDetailsTimesNonStopPassage :visit="visit" />
        <UiSchedulesDetailsRow
          v-if="visit.journeyCode"
          label="Mission"
          :value="visit.journeyCode"
        />
        <UiSchedulesDetailsRow
          v-if="visit.trainNumber"
          label="Train no."
          :value="visit.trainNumber"
        />
      </div>

      <div v-else class="visit-details">
        <StopSchedulesDetailsTimes
          :visit="visit"
          isInline
        />
        <UiSchedulesDetailsRow
          v-if="visit.journeyCode"
          label="Mission"
          :value="visit.journeyCode"
        />
        <UiSchedulesDetailsRow
          v-if="visit.trainNumber"
          label="Train no."
          :value="visit.trainNumber"
        />
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UiSchedulesDetailsRow from '@/components/ui/Schedules/UiSchedulesDetailsRow.vue'
import StopSchedulesDetailsTimes from '@/components/Stop/StopSchedulesDetailsTimes.vue'
import StopSchedulesDetailsTimesNonStopPassage from '@/components/Stop/StopSchedulesDetailsTimesNonStopPassage.vue'
import { VisitType } from '@/utils/fetcher'

export default Vue.extend({
  name: 'StopSchedulesVisits',
  components: {
    UiSchedulesDetailsRow,
    StopSchedulesDetailsTimes,
    StopSchedulesDetailsTimesNonStopPassage,
  },
  props: {
    visits: {} as PropType<VisitType[]>,
  },
  data: () => ({
    updateCounter: 0,
    updateInterval: 0,
  }),
  created () {
    this.updateInterval = setInterval(() => {
      ++this.updateCounter
    }, 5000)
  },
  destroyed () {
    clearInterval(this.updateInterval)
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

.visit-time-shrouded {
  background-color: #C2C2C2;
  color: #444;
  font-weight: 500;
  font-size: 1rem;
}

.visit-time-cancelled {
  background-color: #E59999;
  color: #a03434;
  font-size: 1.5rem;
  font-weight: 500;
}

.visit-destination {
  padding: 0.4rem 0.4rem 0.4rem 0.5rem;
}

.visit-details {
  padding: 0.2rem 0 1rem 1rem;
  overflow-x: auto;
  color: #3f3f3f;
}

</style>
