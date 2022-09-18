<template>
  <div class="tab-page-line">
    <h2>Line</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TabPageLine',
  components: {},
  props: {
    tabNumber: Number,
  },
  methods: {},
})
</script>

<style scoped>
.tab-page-line {
  padding: 0.5rem;
}

</style>
