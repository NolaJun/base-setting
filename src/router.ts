import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: () => import('./Login/Auth.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./Login/Index.vue')
    },
    {
      path: '/Index',
      name: 'home',
      component: () => import('./Index/Index.vue')
    },
    {
      path: '/Mall',
      name: 'Mall',
      component: () => import('./Mall/Index.vue')
    },
    {
      path: '/Order',
      name: 'Order',
      component: () => import('./Order/Index.vue')
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import('./Mine/Index.vue')
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
