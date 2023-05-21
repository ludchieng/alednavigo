<template>
  <div class="stop-prev-next">
    <UiHr />
    <div class="content">
      <button
        class="hint"
        type="button"
        @click="() => isOpen = !isOpen"
      >
        {{ `— ${isOpen ? 'Cacher' : 'Afficher'} les arrêts adjacents —` }}
      </button>
      <UiPrevNext
        v-if="isOpen"
        :prev-items="stop.prevStops.slice().reverse().map(prevStop => ({
          label: getStop($route.params.line, prevStop).displayName,
          link: `/timetables/${$route.params.tab}/${$route.params.line}/${prevStop}`,
        }))"
        :next-items="stop.nextStops.slice().reverse().map(nextStop => ({
          label: getStop($route.params.line, nextStop).displayName,
          link: `/timetables/${$route.params.tab}/${$route.params.line}/${nextStop}`,
        }))"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { StopType } from '@/utils/parser'
import { getStop } from '@/utils/localstore/stops'
import UiPrevNext from '@/components/ui/UiPrevNext.vue'
import UiHr from '@/components/ui/UiHr.vue'

export default Vue.extend({
  name: 'StopPrevNextStops',
  components: {
    UiHr,
    UiPrevNext,
  },
  data: () => ({
    isOpen: false,
  }),
  props: {
    stop: Object as PropType<StopType>,
  },
  methods: {
    getStop,
  },
})
</script>

<style scoped>
.stop-prev-next {
  position: fixed;
  bottom: 3.5rem;
  left: 0;
  right: 0;
}

.content {
  padding: 0.25rem 1rem;
  background: #F4F4F4;
}

.hint {
  display: block;
  padding: 0.3rem 0 0.5rem 0;
  margin: 0 auto;
  color: #4B4B4B;
  font-size: 0.75rem;
  font-family: unset;
  font-weight: unset;
  border: 0;
  background: unset;
}
</style>
