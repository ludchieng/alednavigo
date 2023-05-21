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
  name: 'UiClock',
  props: {
    time: {} as PropType<Time>,
    textGray: Boolean,
  },
})
</script>

<style scoped>
.datetime {
  color: #222;
  font-weight: 600;
  font-size: 1.0625em;
}

.separator {
  color: #838383;
  font-size: 0.9em;
}

.seconds {
  padding-left: 0.1rem;
  font-size: 0.875em;
  color: #838383;
}

.text-gray {
  color: #777;
}
</style>
