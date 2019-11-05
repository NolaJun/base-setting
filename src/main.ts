import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/js/rem'
// vant样式引入
import 'vant/lib/index.css'
// font-awesome 字体图标
import 'font-awesome/css/font-awesome.css'
// @ts-ignore
Vue.config.productionTip = false

require('../public/mock/mock.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
