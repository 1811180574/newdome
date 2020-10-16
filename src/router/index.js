import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
<<<<<<< HEAD
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
=======
    component: () => import('../views/Home.vue')

  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: {
      isshow: true
    }

  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/recommend.vue'),
    meta: {
      isshow: true
    }

  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('../views/shopcar.vue'),
    meta: {
      isshow: true
    }

>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
    meta: {
<<<<<<< HEAD
      isshow: true,
      // keep: true
    }
  },
  //主页手机详情页面
  {path:'/phoneinfo/:ind',name:'phoneinfo',component:()=>import('../views/indexChild/phoneinfo.vue')}


=======
      isshow: true
    }
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('../components/particulars/Particulars.vue')
  },
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router