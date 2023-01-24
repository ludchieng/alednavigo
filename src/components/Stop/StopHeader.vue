<template>
  <div class="title">
    <h1>
      {{ stop.displayName }}
    </h1>
    <span class="line-connections">
      <router-link v-for="conn in stop.lineConnections"
        :key="`${conn.line}/${conn.slugName}`"
        :to="`/timetables/${$route.params.tab}/${conn.line}/${conn.slugName}`"
      >
        <LineIcon :lineSlugName="conn.line" theme="dark" />
      </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'
import LineIcon from '@/components/LineIcon.vue'

export default Vue.extend({
  name: 'StopHeader',
  components: { LineIcon },
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
  margin: 0.5rem 1rem 0 0;
}

.line-connections {
  display: inline-block;
}

.line-connections img {
  width: 2rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  vertical-align: -0.8rem;
}
</style>
