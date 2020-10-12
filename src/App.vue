<template>
  <div id="app">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
