<template>
  <div
    v-if="variant === 'alert'"
    class="visit-time visit-time-alert"
  >
    &times;
  </div>
  <div
    v-else-if="variant === 'shaded'"
    class="visit-time visit-time-shaded"
  >
    {{ time }}
  </div>
  <div
    v-else
    class="visit-time"
  >
    {{ time }}
  </div>
</template>
<script lang="ts">

import { PropType } from 'vue'

export type UiSchedulesTimeVariant = 'normal' | 'alert' | 'shaded'

export default {
  name: 'UiSchedulesTime',
  props: {
    variant: String as PropType<UiSchedulesTimeVariant>,
    time: String,
  },
}
</script>
<style scoped>

.visit-time {
  background-color: #202b3b;
  color: #ffc700;
  font-size: 1.2rem;
  font-weight: 600;
  min-width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.3rem;
  line-height: 2.2rem;
  text-align: center;
}

.visit-time-shaded {
  background-color: #C2C2C2;
  color: #444;
  font-weight: 500;
  font-size: 1rem;
}

.visit-time-alert {
  background-color: #E59999;
  color: #a03434;
  font-size: 1.5rem;
  font-weight: 500;
}

</style>
