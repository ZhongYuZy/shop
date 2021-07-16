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
    component: () => import('../views/login/Login'),
    meta:{
      title:'登录注册'
    }
  },
  // 详情
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/details/Details'),
    meta:{
      title:'详情'
    }
  },
    // 个人资料
    {
      path: '/Personal',
      name: 'Personal',
      component:() => import('../views/personal/Personal '),
      meta:{
        title:'个人资料'
      }
    },
  {
    path: '',
    component: Layout,
    children: [
      // 商城首页
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
          title:'商城'
        }
      },
      // 分类
      {
        path: '/Classification',
        name: 'Classification',
        component: () => import('../views/classification/Classification'),
        meta:{
          title:'分类'
        }
      },
      // 购物车
      {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('../views/shopping/Shopping'),
        meta:{
          title:'购物车'
        }
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
        component:() => import('../views/location/Location'),
        meta:{
          title:'定位'
        }
      },
      // 待评价
      {
        path: '/Evaluated',
        name: 'Evaluated',
        component:() => import('../views/evaluated/Evaluated'),
        meta:{
          title:'待评价'
        }
      },
      // 已完成
      {
        path: '/Completed',
        name: 'Completed',
        component:() => import('../views/completed/Completed'),
        meta:{
          title:'已完成'
        }
      },
      // 全部订单
      {
        path: '/Orders',
        name: 'Orders',
        component:() => import('../views/orders/Orders'),
        meta:{
          title:'全部订单'
        }
      },
       // 收藏商品
       {
        path: '/Collection',
        name: 'Collection',
        component:() => import('../views/collection/Collection'),
        meta:{
          title:'收藏商品'
        }
      },
       // 地址管理
       {
        path: '/Address',
        name: 'Address',
        component:() => import('../views/address/Address'),
        meta:{
          title:'地址管理'
        }
      },
       // 最近浏览
       {
        path: '/Browse',
        name: 'Browse',
        component:() => import('../views/browse/Browse'),
        meta:{
          title:'最近浏览'
        }
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
  document.title=to.meta.title
  next()
})
export default router
