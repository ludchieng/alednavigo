<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon-dark.png">
    <NewTab msg="Welcome to Alednavigo"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewTab from './components/NewTab.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NewTab,
  },
})

// TEST
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
