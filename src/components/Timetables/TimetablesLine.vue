<template>
  <div class="tab-page-line">
    <LineRouteMap :line="$route.params.line"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LineRouteMap from '@/components/LineMap/LineMap.vue'

export default Vue.extend({
  name: 'TimetablesLine',
  components: { LineRouteMap },
})
</script>

<style scoped>
.tab-page-line {
  padding: 10rem 1rem 4rem 1rem;
}
</style>
