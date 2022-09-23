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
  padding: 0.5rem;
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

</style>
