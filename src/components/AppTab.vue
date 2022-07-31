<template>
  <div class="tab">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
