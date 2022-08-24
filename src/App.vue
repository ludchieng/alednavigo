<template>
  <div id="app">
    <AppHeader />
    <AppPageView :tabNumber="tabNumber" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import AppHeader from '@/components/AppHeader.vue'
import AppPageView from '@/components/AppPageView.vue'

const isValidTabNumber = (tabNumber: number | string) => !isNaN(Number(tabNumber)) && Number(tabNumber) >= 1

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppPageView,
  },
  data: () => ({
    tabNumber: 1,
  }),
  watch: {
    '$route.params.tab': {
      handler () {
        if (!isValidTabNumber(this.$route.params.tab)) {
          this.$router.push('/1')
        }
        this.tabNumber = Number(this.$route.params.tab)
      },
      deep: true,
      immediate: true,
    },
  },
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Inter, Helvetica, sans-serif;
  font-weight: 500;
}
</style>
