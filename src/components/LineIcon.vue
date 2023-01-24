<template>
  <img
    v-if="lineSlugName"
    :src="`/img/lines-icons/${theme}/${lineSlugName}.svg`"
    :class="{ 'fade-in': fadeIn }"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LineIcon',
  props: {
    lineSlugName: String,
    fadeIn: {
      type: Boolean,
      default: false,
    },
    theme: String,
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
