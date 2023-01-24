<template>
  <div>
    <AppHeader />
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
import AppHeader from '@/components/AppHeader.vue'

export default Vue.extend({
  name: 'AppView',
  components: {
    AppHeader,
    AppNav,
  },
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
