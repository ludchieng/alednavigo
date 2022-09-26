<template>
  <div class="tab-page-line">
    <table>
      <tr v-for="(row, i) in routeMap" :key="i">
        <td v-for="(cell, j) in row.drawing" :key="j" :class="`${['*', '|', '↑', '↓', '^', 'v', 'o\\', 'o/', '\\o', '/o', '\\.', '/.', '.\\', './'].includes(cell) && 'filled' || ''}`">
          <svg v-if="cell === '*'" class="drawing-stop" viewBox="0 0 16 16">
            <circle v-if="row.isTerminus" cx="8" cy="8" r="6"/>
            <circle v-else cx="8" cy="8" r="4"/>
          </svg>
          <svg v-else-if="cell === '^'" class="drawing-path" viewBox="0 0 16 16">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
            <path d="M0,8 a8,-8 0 0,1 8,-8 L0,0 Z" />
          </svg>
          <svg v-else-if="cell === 'v'" class="drawing-path" viewBox="0 0 16 16">
            <path d="M0,8 a8,8 0 0,0 8,8 L0,16 Z" />
            <path d="M8,16 a8,-8 0 0,0 8,-8 L16,16 Z" />
          </svg>
          <svg v-else-if="cell === 'o\\'" class="drawing-path" viewBox="0 0 16 16">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
          </svg>
          <svg v-else-if="cell === 'o/'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
          </svg>
          <svg v-else-if="cell === '\\o'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
          </svg>
          <svg v-else-if="cell === '/o'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,0 Z" />
          </svg>
          <svg v-else-if="cell === '\\.'" class="drawing-path" viewBox="0 0 16 16">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
          </svg>
          <svg v-else-if="cell === '/.'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(90)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
          </svg>
          <svg v-else-if="cell === '.\\'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(180)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
          </svg>
          <svg v-else-if="cell === './'" class="drawing-path" viewBox="0 0 16 16" transform="rotate(270)">
            <path d="M8,0 a8,8 0 0,1 8,8 L16,16 L0,16 L0 0 Z" />
          </svg>
          <span v-else-if="['↑', '↓'].includes(cell)">{{ cell }}</span>
        </td>
        <td v-if="row.slugName" :class="`label ${row.isTerminus ? 'label-terminus' : ''}`">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${row.slugName}`">
            {{ row.displayName }}
            <div class="line-connections">
              <img
                v-for="(conn, i) in row.lineConnections" :key="i"
                :src="`/img/lines-icons/colors/${conn.line}.svg`"
              >
            </div>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RouteMapTypes } from '@/utils/parser'

export default Vue.extend({
  name: 'TabPageLine',
  data: () => ({
    schema: ['string'],
    routeMap: RouteMapTypes,
  }),
  created () {
    this.update()
  },
  methods: {
    update () {
      this.routeMap = JSON.parse(
        localStorage.getItem(
          `lines.${this.$route.params.line}.routeMap`,
        ) as string)
    },
  },
  watch: {
    '$route.params.line': {
      handler () {
        this.update()
      },
      deep: true,
    },
  },
})
</script>

<style scoped>
.tab-page-line {
  padding: 10rem 1rem 4rem 1rem;
}

td,
tr {
  padding: 0;
  margin: 0;
  height: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td {
  font-size: 1rem;
  width: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: left;
}

td.filled {
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

.drawing-stop {
  display: block;
  z-index: 0;
  position: absolute;
  transform: translate(-0.25rem, 0.5rem);
  width: 1.5rem;
  fill: #fff;
  stroke: #2F2F2F;
  stroke-width: 2.5px;
}

.drawing-path {
  display: block;
  fill: #fff;
}

td.label {
  padding: 0.2rem 0;
  flex-shrink: 1;
  flex-grow: 1;
  width: auto;
}

td.label a {
  display: inline-block;
  padding: 0.4rem 0 0.4rem 1rem;
  min-width: 70%;
  margin-right: 0.75rem;
}

.label-terminus {
  font-weight: 700;
  color: #000;
}

.line-connections > img {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}
</style>
