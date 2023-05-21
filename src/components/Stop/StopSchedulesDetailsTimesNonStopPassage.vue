<template>
  <div class="schedules-details-time">
    <div class="text-gray">
      <UiSchedulesDetailsTimeWrapped
        v-if="visit.departureTime"
        label="Passage sans arrêt"
        :time="toTime(visit.departureTime)"
        :sublabel="visit.departureStatus !== 'onTime' ? visit.departureStatus : null"
        is-time-text-gray
      />
    </div>
    <div>
      <div v-if="visit.platform">
        Voie
      </div>
      <div>{{ visit.platform }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UiSchedulesDetailsTimeWrapped from '@/components/ui/Schedules/UiSchedulesDetailsTimeWrapped.vue'
import { VisitType } from '@/utils/fetcher'
import { toTime } from '@/utils/time'

export default Vue.extend({
  name: 'StopSchedulesDetailsTimesNonStopPassage',
  components: {
    UiSchedulesDetailsTimeWrapped,
  },
  props: {
    visit: Object as PropType<VisitType>,
  },
  methods: {
    toTime,
  },
})
</script>

<style scoped>
.schedules-details-time {
  display: flex;
  max-width: 20rem;
  margin: 0 1rem 0.5rem 0;
  justify-content: space-between;
}
</style>
