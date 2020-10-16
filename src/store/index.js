import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
<<<<<<< HEAD
<<<<<<< HEAD

export default new Vuex.Store({
  state: {
    shopGoods:[],
    //空空购物车
    flag:true,
  },
  mutations: {
    addshopcar(state,shopcar){
      state.shopGoods.push(shopcar)
      state.flag = false
    }
  },
  actions: {
  },
  modules: {
  }
})
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
