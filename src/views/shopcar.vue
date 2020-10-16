<template>
  <div>
    <header>
      <div class="header_content"><</div>
      <div class="header_content" style="width:60%;">购物车</div>
      <div class="header_content"><i class="iconfont icon-sousuo"></i></div>
    </header>

 <!-- 当购物车没有商品的时候显示的页面 -->
   <div class="null_shopcar" v-show="this.$store.state.flag">
     购物车还是空的<button>去逛逛</button>
   </div>
    <div class="shopcar_content">
      <!-- 购物车商品样式的盒子 -->
      <div class="goods" v-for="(item,index) in shopGoods" :key="index">
        <div class="goods_photo">
          <img :src="item.img" alt="">
        </div>
        <div class="goods_info">
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
          <p>
            <button>-</button>
            <button style="background:#fff;">1</button>
            <button>+</button>
            <i class="iconfont icon-dibudaohanglan-"></i>
          </p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer_box" style="line-height:0.4rem;">
        <p>共{{shopprice}}件金额:</p>
        <p><b style="color:#FF5722;font-size:0.42rem;">10000</b>元</p>
      </div>
      <div class="footer_box" style="background:#F4F4F4; font-size:0.26rem;">继续购物</div>
      <div class="footer_box" style="background:#FF6700; font-size:0.26rem;color:#fff;">去结算</div>

    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopGoods:this.$store.state.shopGoods
      // shopGoods:JSON.parse(localStorage.getItem('shopgoods'))

    }
  },
  computed:{
    shopprice(){
    var num = 0
    return num += Number(this.$store.state.shopGoods.price)
    }
  },
  created(){
    console.log(this.shopGoods)
    console.log(JSON.parse(localStorage.getItem('shopgoods')))
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 0.8rem;
  background: #f2f2f2;
  .header_content {
    width: 20%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #666666;
  }
}
.shopcar_content {
  width: 100%;
}
.goods {
  width: 100%;
  height: 2.2rem;
  margin-top: 0.2rem;
  border-bottom:0.01rem solid #ccc;
  display: flex;
  justify-content: space-between;
  .goods_photo {
    width: 2.3rem;
    height: 100%;
    text-align: center;
    line-height:2.2rem;
    img{
      width: 1.7rem;
      height: 1.8rem;
    }
  }
  .goods_info{
    flex: 1;
    p{
      margin: 0;
      padding: 0;
      font-size:0.24rem;
      margin-top: 0.1rem;
    }
    button{
      width: 0.82rem;
      height: 0.64rem;
      background:#F9F9F9;
      border:1px solid #ccc;

    }
  }
}
.null_shopcar{
  width: 100%;
  height: 88vh;
  position: absolute;
  top:0.8rem;
  background:#fff;
  line-height: 4rem;
  text-align: center;
  z-index: 10;
  font-size:0.4rem;
  color:#ccc;
  button{
    border:1px solid #ccc;
    padding:0.1rem;
    margin-left: 0.1rem;
  }
}

footer{
  width: 100%;
  height: 0.88rem;
  position: absolute;
  bottom:0.88rem;

  .footer_box{
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 0.88rem;
    font-size:0.24rem;
    color:#B8B8B8;
    bottom:0.88rem;
    p{
      margin: 0;padding: 0;
    }
  }

}
</style>
