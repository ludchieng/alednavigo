<template>
  <LineRouteMapTable
    :line="line"
    :routeMap="routeMap"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { RouteMapType } from '@/utils/parser'
import LineRouteMapTable from './Table.vue'

export default Vue.extend({
  name: 'LineRouteMap',
  components: { LineRouteMapTable },
  props: {
    line: String,
  },
  data: () => ({
    routeMap: [] as RouteMapType,
  }),
  created () {
    this.update()
  },
  methods: {
    update () {
      this.routeMap = JSON.parse(localStorage.getItem(`lines.${this.line}.routeMap`) as string)
    },
  },
  watch: {
    line () {
      this.update()
    },
  },
})
</script>

<style scoped>
</style>
