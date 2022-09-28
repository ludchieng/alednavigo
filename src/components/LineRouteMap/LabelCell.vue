<template>
  <router-link v-if="href"
    class="label-text"
    :to="href"
  >
    {{ stopName }}
    <div class="line-connections">
      <img v-for="(conn, i) in lineConnections" :key="i"
        :src="`/img/lines-icons/colors/${conn.line}.svg`"
      >
    </div>
  </router-link>

  <span v-else class="label-text">
    {{ stopName }}
    <div class="line-connections">
      <img
        v-for="(conn, i) in lineConnections" :key="i"
        :src="`/img/lines-icons/colors/${conn.line}.svg`"
      >
    </div>
  </span>
</template>

<script lang="ts">
import { LineConnectionType } from '@/utils/parser'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'LineRouteMapLabelCell',
  props: {
    stopName: String,
    href: String,
    lineConnections: [] as PropType<LineConnectionType[]>,
  },
})
</script>

<style scoped>
.label-text {
  display: inline-block;
  padding: 0.4rem 0 0.4rem 1rem;
  min-width: 70%;
  margin-right: 0.75rem;
}

.line-connections > img {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}
</style>
