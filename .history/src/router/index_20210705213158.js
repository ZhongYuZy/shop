import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

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
      // 购物车
      {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('../views/shopping/Shopping')
      },
      // 我的
      {
        path: '/My',
        name: 'My',
        component:() => import('../views/my/My.vue')
      },
      {
        pa
      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
