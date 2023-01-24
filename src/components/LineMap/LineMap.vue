<template>
  <LineMapTable
    :line="line"
    :route-map="routeMap"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import LineMapTable from './LineMapTable.vue'
import { RouteMapType } from '@/utils/parser'
import { getLineRouteMap } from '@/utils/localstore/lines'

export default Vue.extend({
  name: 'LineMap',
  components: { LineMapTable },
  props: {
    line: String,
  },
  data: () => ({
    routeMap: [] as RouteMapType,
  }),
  watch: {
    line () {
      this.update()
    },
  },
  created () {
    this.update()
  },
  methods: {
    update () {
      this.routeMap = getLineRouteMap(this.line)
    },
  },
})
</script>

<style scoped>
</style>
