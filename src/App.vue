<template>
  <div id="app">
    <div id="nav">

      <Home></Home>
    </div>
    <router-view/>
  </div>
</template>


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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
