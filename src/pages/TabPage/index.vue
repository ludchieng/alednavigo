<template>
  <div>
    <TabPageLine v-if="line()" />
    <TabPageNew v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabPageNew from '@/pages/TabPage/New.vue'
import TabPageLine from '@/pages/TabPage/Line.vue'

export default Vue.extend({
  name: 'TabPage',
  components: {
    TabPageNew,
    TabPageLine,
  },
  methods: {
    line () {
      return this.$route.params.line
    },
  },
})
</script>

<style scoped>
</style>
