import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    shopGoods:[],
    //空空购物车
    flag:true,
  },
  mutations: {
    addshopcar(state,shopcar){
      state.shopGoods.push(shopcar)
      sessionStorage.getItem('key',JSON.stringify(state.shopGoods))
      state.flag = false
    },
    sesscar(state,val){
      state.shopGoods.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
