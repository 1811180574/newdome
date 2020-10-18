<template>
  <div id="app">
    <div id="nav">

    </div>
    <!-- <router-view/> -->
    <Home v-show='$route.meta.isshow'></Home>


    <router-view />
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  components:{
    Home
  },
  data() {
    return{

    }
  },
}
</script>


<script>
import Home from './views/Home.vue'
export default {
  components:{
    Home
  },
  created(){
    if (sessionStorage.getItem("key") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("key"))))
      }

     window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("key",JSON.stringify(this.$store.state.shopGoods))
        //刷新的时候把session里面的值，反调给vuex，利用vuex渲染

      })


  },
  data(){
    return{

    }
  }
}

</script>
<style>

</style>
