<template>
  <nav>
    <hr>
    <div class="nav-content">
      <div v-if="showTabsList" class="nav-tabs-list">
        <ul>
          <li v-for="({ line, stop, path }, i) in $store.state.tabs" :key="i"
            class="tab"
            :class="{ 'tab-active': tabIndex() === i }"
          >
            <router-link class="tab-link" :to="`/${i + 1}/${path}`">
              <span class="tab-label">
                <LineIcon :lineSlugName="line" :theme="tabIndex() === i ? 'dark' : 'light'" />
                <span v-if="stop" class="tab-label-text">
                  {{ getStop(line, stop).displayName }}
                </span>
              </span>
            </router-link>
            <button v-if="$store.state.tabs.length > 1"
              class="close-tab"
              @click="closeTab(i)"
            >
              &times;
            </button>
          </li>
        </ul>
      </div>

      <div class="nav-controls">
        <router-link class="to-settings" to="#">
          <img class="icon-settings" src="/img/mui/more-vert.svg" />
        </router-link>
        <div class="tabs-manager">
          <ul v-if="!showTabsList" class="tabs">
            <li v-for="({ line, stop, path }, i) in $store.state.tabs" :key="i"
              class="tab"
              :class="{ 'tab-active': tabIndex() === i }"
            >
              <router-link class="tab-link" :to="`/${i + 1}/${path}`">
                <span class="tab-label">
                  <LineIcon :lineSlugName="line" :theme="tabIndex() === i ? 'dark' : 'light'" />
                  <span v-if="stop" class="tab-label-text">
                    {{ getStop(line, stop).displayName }}
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="add-tab" @click="addTab()">
          +
        </button>
        <button class="btn-toggle-tabs-list" @click="showTabsList = !showTabsList">
          <img class="icon-tabs-list" src="/img/mui/reorder.svg" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { getStop } from '@/utils/localstore/stops'
import LineIcon from '@/components/Line/Icon.vue'

export default Vue.extend({
  name: 'AppNav',
  components: { LineIcon },
  data: () => ({
    showTabsList: false,
  }),
  methods: {
    getStop,
    tabIndex () {
      return Number(this.$route.params.tab) - 1 as number
    },
    addTab () {
      this.$store.commit('addTab')
      this.$router.push(`/${this.$store.state.tabs.length}`)
    },
    closeTab (tabIndex: number) {
      const currentTabIndex = Number(this.$route.params.tab) - 1
      if (currentTabIndex > tabIndex) {
        const { line, stop } = this.$store.state.tabs[currentTabIndex]
        this.$store.commit('closeTab', { tabIndex })
        this.$router.push(`/${currentTabIndex}${line ? `/${line}` : ''}${stop ? `/${stop}` : ''}`)
      } else {
        this.$store.commit('closeTab', { tabIndex })
        const { line, stop } = this.$store.state.tabs[currentTabIndex]
        this.$router.push(`/${currentTabIndex + 1}${line ? `/${line}` : ''}${stop ? `/${stop}` : ''}`)
      }
    },
  },
})
</script>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 3.5rem;
  background-color: #2f2f2f;
  color: #ffffff;
}

hr {
  position: relative;
  top: 0;
  margin: 0 0 0 0;
  height: 0.3rem;
  background-color: #ffffff;
  border: 0;
}

.nav-tabs-list {
  padding-top: 0.2rem;
  max-height: 70vh;
  overflow-y: auto;
}

.nav-tabs-list ul {
  display: flex;
  flex-direction: column-reverse;
}

.nav-controls {
  display: flex;
  align-items: center;
  height: 3.2rem;
}

.nav-controls>div {
  display: flex;
  height: inherit;
  width: 100%;
  justify-content: space-between;
}

.to-settings {
  display: inline-block;
}

.icon-settings {
  width: 2rem;
  vertical-align: -5px;
}

.nav-controls .tabs-manager {
  overflow: auto hidden;
  scrollbar-width: thin;
}

.nav-controls .tabs {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
}

.tab {
  display: block;
  height: 2.4rem;
  background-color: #202020;
  color: #ffffff;
}

.nav-controls .tab {
  margin-right: 2px;
  border-radius: 0 0 4px 4px;
}

.nav-tabs-list .tab {
  display: flex;
  margin: 2px;
  border-radius: 4px;
}

.tab-active {
  background-color: #ffffff;
  color: #2f2f2f;
}

.tab-link {
  display: block;
  padding: 0.6rem 0.5rem 0.6rem 0.5rem;
  min-width: 2rem;
}

.nav-tabs-list .tab-link {
  width: 100%;
}

.tab-link:after {
  content: "\00a0";  /* Keeps hitbox when it has no text */
}

.tab-label {
  display: flex;
  align-items: center;
}

.nav-controls .tab-label {
  justify-content: center;
}

.tab-label-text {
  margin-left: 0.5rem;
  line-height: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-controls .tab-label-text {
  max-width: 5.5rem;
}

.nav-controls .tab-label-text {
  font-size: 0.9rem;
  margin-left: 0.3rem;
}

button {
  background: transparent;
  border: 0;
  color: inherit;
}

.add-tab {
  margin: auto 0.3rem auto 0.4rem;
  padding: 0 0.35rem 0.25rem 0.35rem;
  border-radius: 50%;
  font-size: 1.1rem;
}

.close-tab {
  padding: 0.5rem 0.75rem;
  font-size: 1.0rem;
}

.btn-toggle-tabs-list {
  display: inline-block;
  padding-left: 0;
}

.icon-tabs-list {
  margin: 0.3rem;
  width: 1.8rem;
}
</style>
