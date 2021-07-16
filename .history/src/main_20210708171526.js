import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import utils from './utils'
import api from './http/api'
import Top from '../src/components/top/Top'

// 把api挂载成全局变量
Vue.prototype.$api = api

Vue.prototype.$utils = utils
Vue.component('TOP')

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
