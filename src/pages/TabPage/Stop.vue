<template>
  <div class="tab-page-stop">
    <StopHeader :stop="stop" />
    <StopPrevNextStops :stop="stop" />
    <StopTimetable :stop="stop" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopType } from '@/utils/parser'
import StopTimetable from '@/components/Stop/Timetable.vue'
import StopHeader from '@/components/Stop/Header.vue'
import StopPrevNextStops from '@/components/Stop/PrevNextStops.vue'

export default Vue.extend({
  name: 'TabPageStop',
  components: {
    StopTimetable,
    StopHeader,
    StopPrevNextStops,
  },
  data: () => ({
    stop: {} as StopType,
  }),
  created () {
    this.update()
  },
  methods: {
    update () {
      this.stop = JSON.parse(
        localStorage.getItem(
          `lines.${this.$route.params.line}.stops`,
        ) as string)[this.$route.params.stop]
    },
  },
  watch: {
    '$route.path': {
      handler () {
        this.update()
      },
      deep: true,
    },
  },
})
</script>

<style scoped>
.tab-page-stop {
  padding: 0 1rem;
}
</style>
