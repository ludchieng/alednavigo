<template>
  <router-link v-if="href"
    class="label-text"
    :to="href"
  >
    {{ stopName }}
    <div class="line-connections">
      <LineIcon v-for="(conn, i) in lineConnections" :key="i"
        :lineSlugName="conn.line" theme="colors" fadeIn
      />
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
import Vue, { PropType } from 'vue'
import { LineConnectionType } from '@/utils/parser'
import LineIcon from '@/components/Line/Icon.vue'

export default Vue.extend({
  name: 'LineRouteMapLabelCell',
  components: { LineIcon },
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
  width: 1.35rem;
}
</style>
