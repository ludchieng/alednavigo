<template>
  <div class="tab-page-stop">
    <StopTimetable />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StopTimetable from '@/components/StopTimetable/index.vue'

export default Vue.extend({
  name: 'TabPageStop',
  components: {
    StopTimetable,
  },
  data: () => ({
    syncTimer: 0,
    syncInterval: 0,
  }),
  created () {
    this.syncInterval = setInterval(() => {
      ++this.syncTimer
    }, 1000)
  },
  destroyed () {
    clearInterval(this.syncInterval)
  },
  methods: {
  },
  computed: {
  },
  watch: {
  },
})
</script>

<style scoped>
.tab-page-stop {
  padding: 0 1rem;
}
</style>
