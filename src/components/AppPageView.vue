<template>
  <div>
    <div class="tab">
      <router-view>
      </router-view>
    </div>
    <AppNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNav from '@/components/AppNav.vue'

export default Vue.extend({
  name: 'AppPageView',
  components: {
    AppNav,
  },
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
