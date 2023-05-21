<template>
  <div>
    <div
      v-for="visit in visits"
      :key="visit.id"
    >
      <StopSchedulesVisit
        :update-counter="updateCounter"
        :visit="visit"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VisitType } from '@/utils/fetcher'
import StopSchedulesVisit from '@/components/Stop/StopSchedulesVisit.vue'

export default Vue.extend({
  name: 'StopSchedulesVisits',
  components: {
    StopSchedulesVisit,
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
