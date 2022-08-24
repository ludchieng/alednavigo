<template>
  <div>
    <div class="tab">
      <TabPage :tab="getTab()" />
    </div>
    <AppNav :tabs="tabs" :tabNumber="tabNumber" @addTab="addTab" />
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
  props: {
    tabNumber: Number,
  },
  data: () => ({
    tabs: ['string'],
  }),
  created () {
    this.tabs = [
      '/1',
    ]
  },
  methods: {
    getTab () {
      return this.tabs[this.tabNumber - 1]
    },
    addTab () {
      this.tabs.push(`/${this.tabs.length + 1}`)
    },
    isInvalidTabNumber () {
      return this.tabNumber > this.tabs.length
    },
    redirectToHome () {
      this.$router.push('/1')
    },
  },
  watch: {
    tabNumber: {
      handler () {
        if (this.isInvalidTabNumber()) {
          this.redirectToHome()
        }
      },
      immediate: true,
    },
  },
})
</script>

<style scoped>
.tab {
  padding: 3rem 0 5rem 0;
}
</style>
