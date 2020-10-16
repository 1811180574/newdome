<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <Home v-show="$route.meta.isshow"></Home>

    <router-view />
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  components: {
    Home
  },
  data() {
    return {}
  }
}
</script>

<style></style>
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
