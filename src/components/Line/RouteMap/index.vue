<template>
  <LineRouteMapTable
    :line="line"
    :routeMap="routeMap"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import LineRouteMapTable from './Table.vue'
import { RouteMapType } from '@/utils/parser'
import { getLineRouteMap } from '@/utils/localstore/lines'

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
      this.routeMap = getLineRouteMap(this.line)
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
