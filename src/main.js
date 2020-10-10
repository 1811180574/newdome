import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css' //阿里图标库
//引入axios
import axios from 'axios'
//引入less
import less from 'less'
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
//引入写手机端的样式
import './assets/css/style.css'
import './assets/css/normalize.css'
import './assets/js/rem.js'
//引入icon图标样式
import './assets/icon/iconfont.css'

Vue.use(less)
Vue.use(Vant)


Vue.config.productionTip = false
//使用axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
