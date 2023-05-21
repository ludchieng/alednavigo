<template>
  <UiSchedulesTime
    :time="time"
    :variant="variant"
  />
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { VisitType } from '@/utils/fetcher'
import UiSchedulesTime, { UiSchedulesTimeVariant } from '@/components/ui/Schedules/UiSchedulesTime.vue'

export default Vue.extend({
  name: 'StopSchedulesVisitTime',
  components: { UiSchedulesTime },
  props: {
    visit: {
      type: Object as PropType<VisitType>,
      required: true,
    },
    variant: String as PropType<UiSchedulesTimeVariant>,
  },
  computed: {
    time () {
      const visitTime: any = (this.visit.nonStopPassage || !this.visit.departureTime)
        ? this.visit?.arrivalTime
        : this.visit?.time
      return ((visitTime - Date.now()) / 1000 / 60).toFixed(0)
    },
  },
})
</script>
