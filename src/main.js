import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'

import axios from 'axios'
import './assets/css/style.css'
import './assets/css/normalize.css'
import './assets/js/rem.js'

// 引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)


Vue.use(less) // 静态图片要引入再使用
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
