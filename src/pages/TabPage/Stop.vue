<template>
  <div class="tab-page-stop">
    <h2>
      {{ stop.displayName }}
      <span class="line-connections">
        <LineIcon
          v-for="(conn, i) in stop.lineConnections" :key="i"
          type="dark" :line="conn.line" />
      </span>
    </h2>

    <div class="prev-next-stops">
      <ul>
        <li v-for="(prevStop, i) in stop.prevStops" :key="i">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${prevStop}`">
            {{ getStop($route.params.line, prevStop) }}
          </router-link>
        </li>
      </ul>
      <ul>
        <li v-for="(nextStop, i) in stop.nextStops" :key="i">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${nextStop}`">
            {{ getStop($route.params.line, nextStop) }}
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopType } from '@/utils/parser'
import LineIcon from '@/components/LineIcon.vue'

export default Vue.extend({
  name: 'TabPageStop',
  components: {
    LineIcon,
  },
  data: () => ({
    stop: {} as StopType,
  }),
  created () {
    this.update()
  },
  methods: {
    update () {
      this.stop = JSON.parse(
        localStorage.getItem(
          `lines.${this.$route.params.line}.stops`,
        ) as string)[this.$route.params.stop]
    },
    getStop (line: string, slugName: string) {
      return JSON.parse(
        localStorage.getItem(`lines.${line}.stops`) as string,
      )[slugName].displayName
    },
  },
  watch: {
    '$route.params.line': {
      handler () {
        this.update()
      },
      deep: true,
    },
    '$route.params.stop': {
      handler () {
        this.update()
      },
      deep: true,
    },
  },
})
</script>

<style scoped>
.tab-page-stop {
  padding: 1rem;
}

.line-connections {
  margin-top: 0.4rem;
  display: inline-block;
}

.line-connections > img {
  width: 2rem;
  margin-bottom: 0.4rem;
  margin-right: 0.4rem;
  vertical-align: -0.4rem;
}

.prev-next-stops {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.prev-next-stops ul {
  width: 49%;
}

.prev-next-stops li {
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #dfdfdf;
  border-radius: 0.4rem;
}

</style>
