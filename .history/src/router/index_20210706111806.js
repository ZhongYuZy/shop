import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  // 登陆注册
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login')

  },
  // 详情
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/details/Details')
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
        component:() => import('../views/my/My.vue'),
        meta:{
          title:'我的'
        }
      },
      // 定位
      {
        path: '/Location',
        name: 'Location',
        component:() => import('../views/location/Location')
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to , from , next) => {
  document.title=to
})
export default router
