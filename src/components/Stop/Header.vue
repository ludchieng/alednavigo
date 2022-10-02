<template>
  <div class="title">
    <h1>
      {{ stop.displayName }}
    </h1>
    <span class="line-connections">
      <img
        v-for="(conn, i) in stop.lineConnections" :key="i"
        :src="`/img/lines-icons/dark/${conn.line}.svg`"
      />
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'

export default Vue.extend({
  name: 'StopHeader',
  props: {
    stop: {} as PropType<StopType>,
  },
})
</script>

<style scoped>
.title {
  min-height: 2.8rem;
}

h1 {
  font-size: 1.5rem;
  display: inline-block;
  margin: 0.5rem 1rem 0rem 0;
}

.line-connections {
  display: inline-block;
}

.line-connections > img {
  width: 2rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  vertical-align: -0.8rem;
}
</style>
