<template>
  <div id="app">
    <AppHeader />
    <AppPageView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import AppHeader from '@/components/AppHeader.vue'
import AppPageView from '@/components/AppPageView.vue'
import { synchronize } from './utils/localstore/synchronizer'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppPageView,
  },
  created () {
    if (!localStorage.getItem('lines.updatedAt')) {
      synchronize().then(() => {
        window.location.href = '/'
      })
    }
    // Ping server to wake it up
    fetch('https://idfm-prim.herokuapp.com/')
  },
  watch: {
    '$route.params.tab': {
      handler () {
        const tabNumber = Number(this.$route.params.tab)
        const isValidTabNumber = tabNumber >= 1 && tabNumber <= this.$store.state.tabs.length
        if (!isValidTabNumber) {
          return this.$router.push('/1')
        }
        this.$store.state.tabNumber = tabNumber
        this.$store.state.tabIndex = tabNumber - 1
      },
      deep: true,
      immediate: true,
    },
    '$route.path': {
      handler () {
        const line = this.$route.params.line
        const stop = this.$route.params.stop
        this.$store.commit('setTab', {
          idx: this.$store.state.tabIndex,
          tab: { line, stop },
        })
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
  color: #2F2F2F;
}

#app {
  font-family: Inter, Helvetica, sans-serif;
  font-weight: 500;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>
