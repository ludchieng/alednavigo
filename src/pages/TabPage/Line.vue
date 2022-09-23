<template>
  <div class="tab-page-line">
    <table>
      <tr v-for="(row, i) in routeMap" :key="i">
        <td v-for="(cell, j) in row.drawing" :key="j" :class="`${['*', '|'].includes(cell) && 'filled' || ''}`">
          {{ cell === '*' ? '●' : '' }}
        </td>
        <td v-if="row.slugName" class="label">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${row.slugName}`">
            {{ row.displayName }}
            <span class="line-connections">
              <LineIcon
                v-for="(conn, i) in row.lineConnections" :key="i"
                type="dark" :line="conn.line"
              />
            </span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RouteMapTypes } from '@/utils/parser'
import LineIcon from '@/components/LineIcon.vue'

export default Vue.extend({
  name: 'TabPageLine',
  components: {
    LineIcon,
  },
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
}

td {
  font-size: 1rem;
  min-width: 1rem;
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

td.label {
  padding: 0.4rem 0;
  flex-shrink: 1;
  flex-grow: 1;
}

td.label a {
  display: inline-block;
  padding: 0.4rem 0 0.4rem 1rem;
  margin-right: 0.75rem;
}

.line-connections {
  display: inline-block;
}

.line-connections > img {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  vertical-align: top;
}
</style>
