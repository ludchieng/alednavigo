<template>
  <div>
    <details
      v-for="visit in visits"
      :key="visit.id"
      class="row"
    >
      <summary class="visit">
        <div class="visit-code">
          {{ visit.journeyCode }}
        </div>
        <StopSchedulesVisitTime
          :key="updateCounter"
          :visit="visit"
        />
        <div class="visit-destination">
          {{ visit.destination }}
        </div>
      </summary>

      <div
        v-if="visit.operator === 'SNCF' && !visit.nonStopPassage"
        class="visit-details"
      >
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

      <div
        v-else-if="visit.operator === 'SNCF' && visit.nonStopPassage"
        class="visit-details"
      >
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

      <div
        v-else
        class="visit-details"
      >
        <StopSchedulesDetailsTimes
          :visit="visit"
          is-inline
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
import StopSchedulesVisitTime from '@/components/Stop/StopSchedulesVisitTime.vue'

export default Vue.extend({
  name: 'StopSchedulesVisits',
  components: {
    StopSchedulesVisitTime,
    UiSchedulesDetailsRow,
    StopSchedulesDetailsTimes,
    StopSchedulesDetailsTimesNonStopPassage,
  },
  props: {
    visits: {
      type: Array as PropType<VisitType[]>,
    },
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
  margin: 0 -1rem 0.25rem -1rem;
  border-bottom: 1px solid #E6E6E6;
}

.visit {
  display: flex;
  margin-bottom: 0.25rem;
  align-items: center;
}

.visit-code {
  margin: 0 0.2rem 0 0.75rem;
  max-width: 2.85rem;
  min-width: 2.85rem; /* Prevents weird shrink */
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
  border-radius: 0 0.2rem 0.2rem 0;
  overflow-x: hidden;
}

.visit-destination {
  padding: 0 0.4rem 0 0.5rem;
}

.visit-details {
  padding: 0.2rem 0 0.75rem 3.75rem;
  overflow-x: auto;
  color: #777777;
}

</style>
