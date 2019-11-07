import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // 授权页
      name: 'Auth',
      component: () => import('./Login/Auth.vue')
    },
    {
      path: '/Login', // 登录
      name: 'Login',
      component: () => import('./Login/Index.vue')
    },
    {
      path: '/Index', // 首页
      name: 'home',
      component: () => import('./Index/Index.vue')
    },
    {
      path: '/Mall', // 商城
      name: 'Mall',
      component: () => import('./Mall/Index.vue')
    },
    {
      path: '/Order', // 订单列表
      name: 'Order',
      component: () => import('./Order/Index.vue')
    },
    {
      path: '/Mine', // 我的
      name: 'Mine',
      component: () => import('./Mine/Index.vue')
    },
    {
      path: '/Address', // 地址列表
      name: 'Address',
      component: () => import('./Address/Index.vue')
    },
    {
      path: '/AddAddress', // 添加编辑地址
      name: 'AddAddress',
      component: () => import('./Address/Add.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./components/404.vue')
    },
    { // 没有匹配的路由都进入404
      path: '*',
      redirect: '/404'
    }
  ]
})
