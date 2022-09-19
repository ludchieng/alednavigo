<template>
  <div class="tab-page-stop">
    <h2>{{ $route.params.stop }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TabPageStop',
  components: {},
  methods: {},
})
</script>

<style scoped>
.tab-page-stop {
  padding: 0.5rem;
}

</style>
