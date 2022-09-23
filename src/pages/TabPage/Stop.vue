<template>
  <div class="tab-page-stop">
    <h2>
      {{ stop.displayName }}
    </h2>
    <span class="line-connections">
      <LineIcon
        v-for="(conn, i) in stop.lineConnections" :key="i"
        type="dark" :line="conn.line" />
    </span>

    <div class="prev-next-stops">
      <ul>
        <li v-for="(prevStop, i) in stop.prevStops" :key="i" class="prev-stops">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${prevStop}`">
            <span>
              {{ getStop($route.params.line, prevStop) }}
            </span>
          </router-link>
        </li>
      </ul>
      <ul>
        <li v-for="(nextStop, i) in stop.nextStops" :key="i" class="next-stops">
          <router-link :to="`/${$route.params.tab}/${$route.params.line}/${nextStop}`">
            <span>
              {{ getStop($route.params.line, nextStop) }}
            </span>
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
h2 {
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
}

.tab-page-stop {
  padding: 0 1rem;
}

.line-connections {
  display: inline-block;
}

.line-connections > img {
  width: 2rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  vertical-align: -0.8rem;
}

.prev-next-stops {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
}

.prev-next-stops ul {
  width: 49%;
}

.prev-next-stops li a {
  display: flex;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  background-color: #dfdfdf;
  border-radius: 0.4rem;
  text-align: center;
}
.prev-next-stops a span {
  display: inline-block;
  width: 100%;
  padding: 0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prev-stops a::before {
  content: '〈';
}
.next-stops a::after {
  content: '〉';
}

</style>
