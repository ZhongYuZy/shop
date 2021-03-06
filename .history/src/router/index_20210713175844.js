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
    meta: {
      title: '登录注册'
    }
  },
  // 编辑地址
  {
    path: '/Edit',
    name: 'Edit',
    component: () => import('../views/edit/Edit'),
    meta: {
      title: '编辑地址'
    }
  },
  // 详情
  {
    path: '/Details',
    name: 'Details',
    component: () => import('../views/details/Details'),
    meta: {
      title: '详情'
    }
  },
  // 个人资料
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import('../views/personal/Personal '),
    meta: {
      title: '个人资料'
    }
  },
  // 已完成
  {
    path: '/Completed',
    name: 'Completed',
    component: () => import('../views/completed/Completed'),
    meta: {
      title: '已完成'
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
        meta: {
          title: '商城'
        }
      },
      // 分类
      {
        path: '/Classification',
        name: 'Classification',
        component: () => import('../views/classification/Classification'),
        meta: {
          title: '分类'
        }
      },
      // 购物车
      {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('../views/shopping/Shopping'),
        meta: {
          title: '购物车'
        }
      },
      // 我的
      {
        path: '/My',
        name: 'My',
        component: () => import('../views/my/My.vue'),
        meta: {
          title: '我的'
        }
      },
      // 定位
      {
        path: '/Location',
        name: 'Location',
        component: () => import('../views/location/Location'),
        meta: {
          title: '定位'
        }
      },
      // 待评价
      {
        path: '/Evaluated',
        name: 'Evaluated',
        component: () => import('../views/evaluated/Evaluated'),
        meta: {
          title: '待评价'
        }
      },
      // 全部订单
      {
        path: '/Orders',
        name: 'Orders',
        component: () => import('../views/orders/Orders'),
        meta: {
          title: '全部订单'
        }
      },
       // 结算订单
       {
        path: '/Or<template>
        <div>
          <Top>
            <template #top>
              <div class="box">
                <div class="fillet" @click="onclick">
                  <van-icon name="arrow-left" />
                </div>
                <div class="order">全部订单</div>
              </div>
            </template>
          </Top>
          <div class="box1">
            <div v-if="list.length === 0">
              <div class="two">
                <div>还没有地址前往设置</div>
                <div><van-icon name="arrow" @click="click1" class="two-one" /></div>
              </div>
            </div>
            <div v-else class="box2">
              <div class="goods">
                <div>收货人:{{ list.name }}</div>
                <div>{{ list.tel }}</div>
              </div>
              <div class="address">
                <van-icon name="location-o" class="location" />
                <div class="shou">收货地址:{{ list.address }}</div>
                <van-icon name="arrow" class="arrow" @click="click1" />
              </div>
            </div>
          </div>
          <div>
            <img src="../../assets/caitiao.jpg" class="tu" />
          </div>
          <div v-for="(item, index) in obj" :key="index">
            <div class="like">
              <div id="img">
                <img :src="item.image_path" class="img" />
              </div>
              <div>
                <div class="name">{{ item.name }}</div>
                <div class="jia">
                  <div class="price">￥{{ item.present_price }}</div>
                  <div class="count">X{{ item.count }}</div>
                </div>
              </div>
            </div>
          </div>
          <van-submit-bar
            :price="price * 100"
            button-text="提交订单"
            @submit="onSubmit"
          />
        </div>
      </template>
      
      <script>
      export default {
        name: "",
        props: {},
        data() {
          return {
            obj: [],
            list: [],
          };
        },
        components: {},
        methods: {
          // 跳转地址
          click1() {
            this.$router.push("/Address");
          },
          // 返回上一级
          onclick() {
            this.$router.back();
          },
          onSubmit() {
            console.log(this.obj[0].count);
            let id=[]
            this.obj.map(item => {
              id.push(item.cid)
            })
            let idDirect = Boolean(Number(localStorage.getItem("idDirect")));
            this.$api
              .placeOrder({
                address: this.list.address,
                tel: this.list.tel,
                orderId: id,
                totalPrice: this.price,
                idDirect: idDirect,
                count: this.obj[0].count,
              })
              .then((res) => {
                console.log(res);
                this.$router.push('/Completed')
              })
              .catch((err) => {
                console.log("请求失败", err);
              });
          },
          getAddress() {
            // 查询地址
            this.$api
              .getAddress()
              .then((res) => {
                console.log(res);
                if (res.address.length !== 0) {
                  this.list = res.address[0];
                } else {
                  this.list = [];
                }
              })
              .catch((err) => {
                console.log("请求失败", err);
              });
          },
        },
        mounted() {
          this.obj = JSON.parse(this.$route.query.obj);
          console.log(this.obj);
          // this.obj1=JSON.parse(localStorage.getItem('goodsOne'))
          // 查询默认地址
          this.$api
            .getDefaultAddress()
            .then((res) => {
              console.log(res);
              if (res.defaultAdd) {
                this.list = res.defaultAdd;
              } else {
                this.getAddress();
              }
            })
            .catch((err) => {
              console.log("请求失败", err);
            });
        },
        computed: {
          price() {
            let num = 0;
            this.obj.map((item) => {
              num += item.count * item.present_price;
            });
            return num;
          },
        },
        watch: {},
      };
      </script>
      
      <style lang='scss' scoped>
      .box {
        display: flex;
      }
      .fillet {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: gray;
        font-size: 16px;
        margin-top: 5px;
      }
      .order {
        width: 310px;
        display: flex;
        justify-content: center;
        font-size: 17px;
        margin-top: 6px;
      }
      .box1 {
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
      }
      .box2 {
        width: 80%;
        height: 150px;
      }
      .goods {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
      }
      .address {
        position: relative;
        margin-top: 15px;
        display: flex;
      }
      .location {
        font-size: 25px;
        margin-right: 8px;
      }
      .shou {
        font-size: 15px;
        display: flex;
        align-items: center;
      }
      .arrow {
        font-size: 20px;
        position: absolute;
        right: -15px;
      }
      #img {
        margin-left: 15px;
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
      }
      .img {
        width: 90px;
        height: 90px;
      }
      .like {
        display: flex;
      }
      .jia {
        display: flex;
        justify-content: space-between;
      }
      .name {
        color: red;
        font-size: 13px;
        margin-top: 13px;
        margin-left: 7px;
      }
      .price {
        color: red;
        margin-top: 10px;
        margin-left: 7px;
      }
      .count {
        margin-top: 10px;
      }
      .tu {
        width: 100%;
      }
      .two {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      .two-one {
        margin-left: 10px;
        margin-top: 5px;
        font-size: 18px;
      }
      </style>ders',
        name: 'Orders',
        component: () => import('../views/orders/Orders'),
        meta: {
          title: '全部订单'
        }
      },
      // 收藏商品
      {
        path: '/Collection',
        name: 'Collection',
        component: () => import('../views/collection/Collection'),
        meta: {
          title: '收藏商品'
        }
      },
      // 地址管理
      {
        path: '/Address',
        name: 'Address',
        component: () => import('../views/address/Address'),
        meta: {
          title: '地址管理'
        }
      },
      // 最近浏览
      {
        path: '/Browse',
        name: 'Browse',
        component: () => import('../views/browse/Browse'),
        meta: {
          title: '最近浏览'
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
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
