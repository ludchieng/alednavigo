<template>
    <span
      v-if="time.hh && time.mm && time.ss"
      class="datetime"
    >
      <span :class="{ 'text-gray': textGray }">{{ time.hh }}</span>
      <span class="separator">:</span>
      <span :class="{ 'text-gray': textGray }">{{ time.mm }}</span>
      <span class="seconds">{{ time.ss }}</span>
    </span>
</template>

<script lang="ts">
import { Time } from '@/utils/time'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'UiTime',
  props: {
    time: {} as PropType<Time>,
    textGray: Boolean,
  },
})
</script>

<style scoped>
.datetime {
  color: #444;
  font-weight: 600;
}

.separator {
  color: #999;
  font-size: 0.9em;
}

.seconds {
  padding-left: 0.1rem;
  font-size: 0.75em;
  color: #777;
}

.text-gray {
  color: #777;
}
</style>
