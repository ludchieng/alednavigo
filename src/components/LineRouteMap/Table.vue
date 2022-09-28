<template>
  <table>
    <tr v-for="(row, i) in routeMap" :key="i">
      <td v-for="(cell, j) in row.drawing" :key="j"
        :class="{ filled: shouldBeFilledCell(cell) }"
      >
        <DrawingCell :content="cell" :isLargeCircle="row.isTerminus || false" />
      </td>

      <td v-if="row.slugName"
        class="label" :class="{ 'label-terminus': row.isTerminus }"
      >
        <LabelCell
          :stopName="row.displayName"
          :href="`/${$route.params.tab}/${line}/${row.slugName}`"
          :lineConnections="row.lineConnections"
        />
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { RouteMapType } from '@/utils/parser'
import DrawingCell from './DrawingCell.vue'
import LabelCell from './LabelCell.vue'

export default Vue.extend({
  name: 'LineRouteMapTable',
  components: { DrawingCell, LabelCell },
  props: {
    line: String,
    routeMap: [] as PropType<RouteMapType[]>,
  },
  methods: {
    shouldBeFilledCell (cell: string) {
      return [
        '*', '|', '↑', '↓', '^', 'v',
        'o\\', 'o/', '\\o', '/o', '\\.', '/.', '.\\', './',
      ].includes(cell)
    },
  },
})
</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

td,
tr {
  padding: 0;
  margin: 0;
  height: 1rem;
}

td {
  font-size: 1rem;
  width: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
}

.filled {
  background-color: #2F2F2F;
  width: 1rem;
  min-height: 1.3rem;
  padding: 0;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
  line-height: 2.7rem;
  vertical-align: top;
}

.label {
  padding: 0.2rem 0;
  flex-shrink: 1;
  flex-grow: 1;
  width: auto;
}

.label-terminus {
  font-weight: 700;
  color: #000;
}
</style>
