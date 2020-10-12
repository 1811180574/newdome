<template>
  <div id="app">
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
