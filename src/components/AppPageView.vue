<template>
  <div>
    <div class="tab">
      <TabPage />
    </div>
    <AppNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabPage from '@/pages/TabPage/index.vue'
import AppNav from '@/components/AppNav.vue'

export default Vue.extend({
  name: 'AppPageView',
  components: {
    AppNav,
    TabPage,
  },
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
