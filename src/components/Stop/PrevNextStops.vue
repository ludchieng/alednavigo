<template>
  <div class="prev-next-stops">
    <ul>
      <li v-for="(prevStop, i) in stop.prevStops.slice().reverse()" :key="i" class="prev-stops">
        <router-link :to="`/${$route.params.tab}/${$route.params.line}/${prevStop}`">
          <span>
            {{ getStop($route.params.line, prevStop).displayName }}
          </span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-for="(nextStop, i) in stop.nextStops.slice().reverse()" :key="i" class="next-stops">
        <router-link :to="`/${$route.params.tab}/${$route.params.line}/${nextStop}`">
          <span>
            {{ getStop($route.params.line, nextStop).displayName }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'

export default Vue.extend({
  name: 'StopPrevNextStops',
  props: {
    stop: {} as PropType<StopType>,
  },
  methods: {
    getStop (line: string, slugName: string) {
      return JSON.parse(
        localStorage.getItem(`lines.${line}.stops`) as string,
      )[slugName]
    },
  },
})
</script>

<style scoped>
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
  padding: 0.8rem 0;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  background-color: #dfdfdf;
  border-radius: 0.4rem;
  text-align: center;
}
.prev-next-stops a span {
  display: inline-block;
  width: 100%;
  padding: 0.1rem 0.3rem 0 0.3rem;
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
