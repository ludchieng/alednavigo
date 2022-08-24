import Vue from 'vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/1' },
  { path: '/:tab', component: App },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  template: '<router-view class="view"></router-view>',
}).$mount('#app')
