<template>
  <UiSchedulesTime
    :time="time"
    :variant="variant"
  />
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { VisitType } from '@/utils/fetcher'
import UiSchedulesTime from '@/components/ui/Schedules/UiSchedulesTime.vue'

export default Vue.extend({
  name: 'StopSchedulesVisitTime',
  components: { UiSchedulesTime },
  props: {
    visit: {
      type: {} as PropType<VisitType>,
      required: true,
    },
  },
  computed: {
    time () {
      const visitTime: any = (this.visit.nonStopPassage || !this.visit.departureTime)
        ? this.visit?.arrivalTime
        : this.visit?.time
      return ((visitTime - Date.now()) / 1000 / 60).toFixed(0)
    },
    variant () {
      if (!this.visit) {
        return 'normal'
      }
      if (this.visit.departureStatus === 'cancelled' || this.visit.arrivalStatus === 'cancelled') {
        return 'alert'
      }
      if (this.visit.nonStopPassage || !this.visit.departureTime) {
        return 'shaded'
      } else {
        return 'normal'
      }
    },
  },
})
</script>
