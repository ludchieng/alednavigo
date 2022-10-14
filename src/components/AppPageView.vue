<template>
  <div>
    <div class="tab">
      <SettingsPage v-if="$route.params.tab === 'settings'" />
      <TabPage v-else />
    </div>
    <AppNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import TabPage from '@/pages/TabPage/index.vue'
import AppNav from '@/components/AppNav.vue'

export default Vue.extend({
  name: 'AppPageView',
  components: {
    AppNav,
    SettingsPage,
    TabPage,
  },
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
