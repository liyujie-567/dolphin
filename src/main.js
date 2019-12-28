import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Mock from '@/mock'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Mock)
Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
