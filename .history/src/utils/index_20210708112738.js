import { Dialog, Toast } from 'vant'
// 导入路由
import router from '../router'

export default {
  // 检测用户是否登录
  // key: 本地存储用户信息的key
  // next: 传入一个函数 下一步的操作
  // item: next函数需要的参数
  checkLogin({ key, next, item }) {
    // 检测本地有没有用户信息
    let user = localStorage.getItem(key)
    if (user) {
      // 已经登录
      // 继续下一步操作
      next(item)
    } else {
      // 未登录
      Dialog.confirm({
        title: '检测到您未登录',
        message: '是否立即跳转到登录页面?',
      }).then(() => {
        // 跳转到登录页
        router.push('/about')
      }).catch(() => {
        Toast('您取消了操作')
      })
    }
  },
  