<template>
  <div>
    <TabPageLine v-if="line()" :tabNumber="tabNumber" />
    <TabPageNew v-else :tabNumber="tabNumber" />
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
  computed: {
    tabNumber () {
      return Number(this.$route.params.tab)
    },
  },
})
</script>

<style scoped>
</style>
