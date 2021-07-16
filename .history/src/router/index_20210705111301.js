import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login')

  },
  {
    path: '',
    component: Layout,
    children: [
      // 商城首页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      // 分类
      {
        path: '/Classification',
        name: 'Classification',
        component: () => import('../views/classification/Classification')
      },
      {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('../views/')
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router