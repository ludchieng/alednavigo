<template>
  <div class="page">
    <LineRouteMap :line="$route.params.line"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineRouteMap from '@/components/LineMap/LineMap.vue'

export default Vue.extend({
  name: 'TimetablesLinePage',
  components: { LineRouteMap },
})
</script>

<style scoped>
.page {
  padding: 10rem 1rem 4rem 1rem;
}
</style>
