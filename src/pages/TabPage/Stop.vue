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
})
</script>

<style scoped>
.tab-page-stop {
  padding: 0 1rem;
}
</style>
