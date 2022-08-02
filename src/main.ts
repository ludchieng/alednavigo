import Vue from 'vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import NewTabPage from './pages/NewTabPage/index.vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/1' },
  { path: '/:tab', component: NewTabPage },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  template: '<App />',
  components: { App },
}).$mount('#app')
