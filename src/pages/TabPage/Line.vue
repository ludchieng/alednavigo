<template>
  <div class="tab-page-line">
    <table>
      <tr v-for="(row, i) in draw" :key="i">
        <td v-for="(cell, j) in row" :key="j" :class="`${['*', '|'].includes(cell) && 'filled'}`">
          {{ cell === '*' ? '●' : '' }}
        </td>
        <td v-if="data[i][2]" class="label">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${data[i][1]}`">
            {{ data[i][2] }}
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TabPageLine',
  data: () => ({
    schema: ['string'],
    draw: [['string']],
    data: [['string', ['string']]],
  }),
  created () {
    this.update()
  },
  methods: {
    update () {
      fetch(`/schemas/${this.$route.params.line}.tsv`)
        .then((res) => {
          return res.text()
        })
        .then((d) => {
          const rows = d.split('\n')
          const splited = rows.map(r => r.split('@'))
          const transposed = (splited[0].map((_, colIndex) => splited.map(row => row[colIndex])))

          this.draw = transposed[0]
            .map(row => row.split('\t')
              .slice(0, -1)
              .map(cell => cell.trim()))

          this.data = transposed[1]
            .map(row => row.split('\t')
              .slice(1, row.length)
              .map(cell => cell.trim()))
            .map((row) => [
              row[0].split(';'),
              ...row.slice(1, row.length),
            ])
        })
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
  padding: 0.5rem;
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
}

td.label {
  padding: 0.8rem 0 0.8rem 1rem;
  flex-shrink: 1;
  flex-grow: 1;
}
</style>
