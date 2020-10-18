<template>
  <div class="home">
    <div class="footer" v-show="$route.meta.isshow">
    <div class="footer" >
       <li v-for='(item,index) in arr' :key="index" @click="fun(index)">
         <router-link :to="item.path" style="text-decoration:none;">
         <img :src="n===index?item.src2:item.src" alt="">
         <p :class="n===index?'sizecolor':''">{{item.name}}</p>
         </router-link>
       </li>
    </div>

  </div> 
  </div>

</template>

<script>

export default {
  data () {
    return {
      n: 0,
      arr: [
        { name: '首页', src: require('../assets/img/tabbar/icon_home.png'), src2: require('../assets/img/tabbar/icon_home_selected.png'), path: '/index' },
        { name: '分类', src: require('../assets/img/tabbar/icon_intro.png'), src2: require('../assets/img/tabbar/icon_intro_selected.png'), path: '/recommend' },
        { name: '购物车', src: require('../assets/img/tabbar/icon_chat.png'), src2: require('../assets/img/tabbar/icon_chat_selected.png'), path: '/shopcar' },
        { name: '我的', src: require('../assets/img/tabbar/icon_mine.png'), src2: require('../assets/img/tabbar/icon_mine_selected.png'), path: '/mine' }
      ]
    }
  },
  methods: {
    fun (index) {
      this.n = index
    }
  }

}
</script>
<style scoped>
.home{
  color:#000;
}
.footer{
  width: 100%;
  height: 0.88rem;
  border-top:0.01rem solid #333;
  position: fixed;
  bottom:0;
  text-align: center;
  background: #fff;
  z-index: 10;
}
.footer li{
  font-size:0.2rem;
  width: 25%;
  list-style: none;
  float: left;
}
li img{
  width: 0.4rem;
  margin-top: 0.1rem;
}
li p{
  margin-top: 0;
  font-size:0.26rem;
  color:#6C6C6C;

}
.sizecolor{
  color:#E12A1F;
}

</style>
