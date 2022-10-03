import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './registerServiceWorker'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/1' },
  { path: '/:tab', component: App },
  { path: '/:tab/:line', component: App },
  { path: '/:tab/:line/:stop', component: App },
  { path: '/about', component: App },
]

const router = new VueRouter({
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
})

new Vue({
  router,
  store,
  template: '<router-view class="view"></router-view>',
}).$mount('#app')
