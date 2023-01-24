<template>
  <div>
    <TabPageStop v-if="$route.params.line && $route.params.stop" />
    <TabPageLine v-else-if="$route.params.line" />
    <TabPageNew v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabPageNew from '@/components/Timetables/TimetablesHome.vue'
import TabPageLine from '@/components/Timetables/TimetablesLine.vue'
import TabPageStop from '@/components/Timetables/TimetablesStop.vue'

export default Vue.extend({
  name: 'TimetablesPage',
  components: {
    TabPageNew,
    TabPageLine,
    TabPageStop,
  },
})
</script>

<style scoped>
</style>
