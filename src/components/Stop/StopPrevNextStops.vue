<template>
  <DesignPrevNext
    :prevItems="stop.prevStops.slice().reverse().map(prevStop => ({
      label: getStop($route.params.line, prevStop).displayName,
      link: `/timetables/${$route.params.tab}/${$route.params.line}/${prevStop}`,
    }))"
    :nextItems="stop.nextStops.slice().reverse().map(nextStop => ({
      label: getStop($route.params.line, nextStop).displayName,
      link: `/timetables/${$route.params.tab}/${$route.params.line}/${nextStop}`,
    }))"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'
import { getStop } from '@/utils/localstore/stops'
import DesignPrevNext from '@/components/ui/UiPrevNext.vue'

export default Vue.extend({
  name: 'StopPrevNextStops',
  components: {
    DesignPrevNext,
  },
  props: {
    stop: {} as PropType<StopType>,
  },
  methods: {
    getStop,
  },
})
</script>

<style scoped>
</style>
