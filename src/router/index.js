import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
        meta: {
      isshow: true,
      // keep: true
    },
    children:[
    ]
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/recommend.vue'),
        meta: {
      isshow: true,
      // keep: true
    }
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('../views/shopcar.vue'),
        meta: {
      isshow: true,
      // keep: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
    meta: {
      isshow: true,
      // keep: true
    }
  },
  //主页手机详情页面
  {path:'/phoneinfo/:ind',name:'phoneinfo',component:()=>import('../views/indexChild/phoneinfo.vue')}



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
