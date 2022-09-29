<template>
  <div class="tab-page-stop">
    <StopTimetable :stop="stop" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopType } from '@/utils/parser'
import StopTimetable from '@/components/StopTimetable/index.vue'

export default Vue.extend({
  name: 'TabPageStop',
  components: {
    StopTimetable,
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
