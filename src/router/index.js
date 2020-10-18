import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index',
    component: () => import('../views/Home.vue'),
    meta: {
      isshow: true,
    },
  },
  {
    path: '/index',
    name: 'index',

    component: () => import('../views/index.vue'),
        meta: {
      isshow: true,
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
  {path:'/phoneinfo/:ind',name:'phoneinfo',component:()=>import('../views/indexChild/phoneinfo.vue')},




  {
    path: '/NewShipping',
    name: 'NewShipping',
    component: () => import( '../components/NewShipping.vue'),
  
  },
  {
    path: '/Shipping',
    name: 'Shipping',
    component: () => import( '../components/Shipping.vue'),
  
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
