<template>
  <div class="new-tab">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewTab',
  props: {
    msg: String,
  },
})
</script>

<style scoped>

</style>
