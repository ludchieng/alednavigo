<template>
  <div id="app">
    <AppView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import AppView from '@/components/AppView.vue'
import { lastUpdatedAt, synchronize } from './utils/localstore/synchronizer'

export default Vue.extend({
  name: 'App',
  components: {
    AppView,
  },
  watch: {
    '$route.params.tab': {
      handler () {
        if (this.$route.path === '/settings') {
          return
        }
        const tabNumber = Number(this.$route.params.tab)
        const isValidTabNumber = tabNumber >= 1 && tabNumber <= this.$store.state.tabs.length
        if (!isValidTabNumber) {
          this.$router.push(`/timetables/1/${this.$store.state.tabs[0].path}`)
        }
      },
      deep: true,
      immediate: true,
    },
    '$route.path': {
      handler () {
        const tabNumber = Number(this.$route.params.tab)
        const line = this.$route.params.line
        const stop = this.$route.params.stop
        if (tabNumber && !isNaN(tabNumber)) {
          this.$store.commit('setTab', {
            idx: tabNumber - 1,
            tab: { line, stop },
          })
        }
      },
      deep: true,
      immediate: true,
    },
    '$store.state.tabs': {
      handler () {
        if (this.$route.path === '/settings') {
          return
        }
        const tabNumber = Number(this.$route.params.tab)
        const isValidTabNumber = tabNumber >= 1 && tabNumber <= this.$store.state.tabs.length
        if (!isValidTabNumber) {
          const newTabNumber = Math.min(this.$store.state.tabs.length, Math.max(1, Number(this.$route.params.tab)))
          const { line, stop } = this.$store.state.tabs[newTabNumber - 1]
          this.$router.push(`/timetables/${newTabNumber}${line ? `/${line}` : ''}${stop ? `/${stop}` : ''}`)
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created () {
    if (!lastUpdatedAt()) {
      synchronize().then(() => {
        window.location.href = '/'
      })
    }
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
