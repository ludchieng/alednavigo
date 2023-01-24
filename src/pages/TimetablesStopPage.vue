<template>
  <div class="page">
    <StopHeader :stop="stop" />
    <StopPrevNextStops :stop="stop" />
    <StopTimetable :stop="stop" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopType } from '@/utils/parser'
import StopTimetable from '@/components/Stop/StopSchedules.vue'
import StopHeader from '@/components/Stop/StopHeader.vue'
import StopPrevNextStops from '@/components/Stop/StopPrevNextStops.vue'
import { getStop } from '@/utils/localstore/stops'

export default Vue.extend({
  name: 'TimetablesStopPage',
  components: {
    StopTimetable,
    StopHeader,
    StopPrevNextStops,
  },
  data: () => ({
    stop: {} as StopType,
  }),
  watch: {
    '$route.path': {
      handler () {
        this.update()
      },
      deep: true,
    },
  },
  created () {
    this.update()
  },
  methods: {
    getStop,
    update () {
      this.stop = getStop(this.$route.params.line, this.$route.params.stop)
    },
  },
})
</script>

<style scoped>
.page {
  padding: 0 1rem 8rem 1rem;
}
</style>
