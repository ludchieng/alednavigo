<template>
  <LineMapTable
    :line="line"
    :routeMap="routeMap"
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
