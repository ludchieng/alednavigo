<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon-dark.png">
    <NewTab />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import NewTab from './pages/NewTabPage/index.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NewTab,
  },
})
</script>

<style>
#app {
  font-family: Inter, Helvetica, sans-serif;
  font-weight: 500;
}
</style>
