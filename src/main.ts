import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import './registerServiceWorker'
import App from './App.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import TimetablesHubPage from '@/pages/TimetablesHubPage.vue'
import TimetablesLinePage from '@/pages/TimetablesLinePage.vue'
import TimetablesStopPage from '@/pages/TimetablesStopPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: App },
  { path: '/settings', component: SettingsPage },
  { path: '/timetables/:tab', component: TimetablesHubPage },
  { path: '/timetables/:tab/:line', component: TimetablesLinePage },
  { path: '/timetables/:tab/:line/:stop', component: TimetablesStopPage },
]

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes,
})

const store = new Vuex.Store({
  state: {
    tabs: [{
      line: '',
      stop: '',
      path: '',
    }],
  },
  mutations: {
    // TODO use actions
    addTab (state) {
      state.tabs.push({ line: '', stop: '', path: '' })
    },
    closeTab (state, { tabIndex }) {
      state.tabs = state.tabs.filter((tab, i) => i !== tabIndex)
      if (state.tabs.length === 0) {
        state.tabs.push({ line: '', stop: '', path: '' })
      }
    },
    setTab (state, { idx, tab }) {
      const newTabs = [...state.tabs]
      newTabs[idx] = {
        line: tab.line,
        stop: tab.stop,
        path: `${tab.line || ''}${tab.line && tab.stop ? '/' + tab.stop : ''}`,
      }
      state.tabs = newTabs
    },
  },
  plugins: [new VuexPersistence().plugin],
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
