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
  background-color: #3B4D5F;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  min-width: 2.125rem;
  height: 1.875rem;
  border-radius: 0.3rem;
  line-height: 1.875rem;
  text-align: center;
  text-shadow: 0 0 4px #001E3D;
}

.visit-time-shaded {
  background-color: #AAAAAA;
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
  text-shadow: none;
}

.visit-time-alert {
  background-color: #FDCBCB;
  color: #D93333;
  font-size: 1.5rem;
  font-weight: 500;
  text-shadow: none;
}

</style>
