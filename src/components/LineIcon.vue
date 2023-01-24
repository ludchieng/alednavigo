<template>
  <img
    v-if="lineSlugName"
    :src="`/img/lines-icons/${theme}/${lineSlugName}.svg`"
    :class="{ 'fade-in': fadeIn, 'hide': fadeIn }"
    @load="onLoad"
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
  methods: {
    onLoad (e: any) {
      if (this.fadeIn) e.target.className = e.target.className.replace('hide', '')
    },
  },
})
</script>

<style scoped>
.hide-fade {
  opacity: 0;
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
