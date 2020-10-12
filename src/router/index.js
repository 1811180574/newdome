import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')

  },
  {
    path: '/index',
    name: 'index',
    component: () => import( '../views/index.vue'),
    meta: {
      isshow: true
    }

  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import( '../views/recommend.vue'),
    meta: {
      isshow: true
    }

  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import( '../views/shopcar.vue'),
    meta: {
      isshow: true
    }

  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import( '../views/mine.vue'),
    meta: {
      isshow: true
    }

  },
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
