import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import child from './components/Child.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'

// 把api挂载成全局变量
Vue.prototype.$api = api
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
