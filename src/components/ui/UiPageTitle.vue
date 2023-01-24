<template>
  <div>
    <h1>
      {{ text }}
    </h1>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiContentTitle',
  props: {
    text: String,
  },
})
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  display: inline-block;
  margin: 0.5rem 1rem 0 0;
}
</style>
