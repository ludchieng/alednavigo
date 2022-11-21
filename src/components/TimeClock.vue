<template>
    <span
      v-if="datetime.hh && datetime.mm && datetime.ss"
      class="datetime"
    >
      <span :class="{ 'text-gray': textGray }">{{ datetime.hh }}</span>
      <span class="separator">:</span>
      <span :class="{ 'text-gray': textGray }">{{ datetime.mm }}</span>
      <span class="seconds">{{ datetime.ss }}</span>
    </span>
</template>

<script lang="ts">
import { DateTime } from '@/utils/datetime'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'TimeClock',
  props: {
    datetime: {} as PropType<DateTime>,
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
