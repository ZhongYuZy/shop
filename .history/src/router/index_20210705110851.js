import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/login',
    name:'login',
    component: () => import('../views/login/Login')
    
  },
  {pa
    path: '/',
    name: 'Home',
    component: Home
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
