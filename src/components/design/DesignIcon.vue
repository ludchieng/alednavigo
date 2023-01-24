<template>
  <img
    :class="{ 'fade-in': fadeIn }"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DesignIcon',
  props: {
    src: String,
    alt: String,
    fadeIn: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
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
