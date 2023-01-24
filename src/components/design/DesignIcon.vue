<template>
  <img
    :class="{
      'size-sm': size === 'sm',
      'size-md': size === 'md',
      'size-lg': size === 'lg',
      'fade-in': fadeIn,
    }"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type DesignIconSize = 'sm' | 'md' | 'lg'

export default Vue.extend({
  name: 'DesignIcon',
  props: {
    src: String,
    alt: String,
    size: String as PropType<DesignIconSize>,
    fadeIn: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
img {
  /* Prevents alt text to display on image load */
  color: transparent;
}

.size-sm {
  width: 1.35rem;
  height: 1.35rem;
}

.size-md {
  width: 2rem;
  height: 2rem;
}

.size-lg {
  width: 3.5rem;
  height: 3.5rem;
}

.fade-in {
  opacity: 1;
  animation: fadeIn 600ms ease;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
