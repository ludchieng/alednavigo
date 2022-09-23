<template>
  <div>
    <TabPageStop v-if="$route.params.line && $route.params.stop" />
    <TabPageLine v-else-if="$route.params.line" />
    <TabPageNew v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabPageNew from '@/pages/TabPage/New.vue'
import TabPageLine from '@/pages/TabPage/Line.vue'
import TabPageStop from '@/pages/TabPage/Stop.vue'

export default Vue.extend({
  name: 'TabPage',
  components: {
    TabPageNew,
    TabPageLine,
    TabPageStop,
  },
})
</script>

<style scoped>
</style>
