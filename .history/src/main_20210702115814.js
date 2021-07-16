import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import child from './components/Child.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
