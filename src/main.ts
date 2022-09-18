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
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

const store = new Vuex.Store({
  state: {
    tabs: [''],
  },
  mutations: {
    addTab (state) {
      state.tabs.push('')
    },
  },
})

new Vue({
  router,
  store,
  template: '<router-view class="view"></router-view>',
}).$mount('#app')
