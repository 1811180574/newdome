<template>
  <div>
    <header>
      <div class="header_content"><</div>
      <div class="header_content" style="width: 60%">购物车</div>
      <div class="header_content"><i class="iconfont icon-sousuo"></i></div>
    </header>

    <!-- 当购物车没有商品的时候显示的页面 -->
    <div class="null_shopcar" v-if="this.$store.state.flag">
      购物车还是空的<button>去逛逛</button>
    </div>
    <div class="shopcar_content" style="padding-bottom:1rem;">
      <!-- 购物车商品样式的盒子 -->
      <div class="goods" v-for="(item, index) in shopGoods" :key="index">
        <div class="goods_photo">
          <img :src="item.img" alt="" />
        </div>
        <div class="goods_info">
          <p>{{ item.name }}</p>
          <p>￥{{ item.price }}</p>
          <p>
            <button @click="reduceshopnum(index)">-</button>
            <button style="background: #fff">{{ item.ids }}</button>
            <button @click="addshopnum(index)">+</button>
            <i class="iconfont icon-dibudaohanglan-" @click="deleteshop(index)"></i>
          </p>
        </div>
      </div>
    </div>
<!-- 手机的信息 -->
        <div
      class="phone_info"
      v-for="(item, index) in indexInfo"
      :key="index"
      @click="goInfo(index)"
    >
      <div class="phone_photo">
        <img :src="item.img" alt="" />
      </div>
      <p style="font-size:0.34rem;color:#000;">{{ item.name }}</p>
      <p>{{ item.content }}</p>
      <p style="color:#EA635C;font-size:0.28rem;">￥{{ item.price }}</p>
    </div>


    <footer style="background:#fff;">
      <div class="footer_box" style="line-height: 0.4rem">
        <p>共{{ shoplength }}件金额:</p>
        <p><b style="color: #ff5722; font-size: 0.42rem"></b>{{ num }}元</p>
      </div>
      <div class="footer_box" style="background: #f4f4f4; font-size: 0.26rem">
        继续购物
      </div>
      <div
        class="footer_box"
        style="background: #ff6700; font-size: 0.26rem; color: #fff"
      >
        去结算
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopGoods: JSON.parse(sessionStorage.getItem('key')),

      shopNumber: 1,
          //手机信息
      indexInfo: [],
      //单个总价格
      danPrice: [],
      zongPrice: [],
      num: 0,
      a: [],
    }
  },
  methods: {
       //获取主页的数据
    async getindexinfo() {
      const res = await this.$axios.get(
        '/data/homeGoods.json'
      )
      this.indexInfo = res.data
    },
    fun() {
        this.num = 0
      for (var i = 0; i < this.shopGoods.length; i++) {
        this.num +=
          Number(this.shopGoods[i].price) * Number(this.shopGoods[i].ids)
        console.log(this.shopGoods[i].ids)
      }
    },
    deleteshop(index){
        this.shopGoods[index] = {}
        this.shopGoods =this.shopGoods

    },
    addshopnum(index) {
        this.shopGoods[index].ids++
        this.fun()

    },

      goInfo(index) {
      this.$router.push({
        //跳转页面传参
        path: `/phoneinfo/${index}`,
      })
    },
    reduceshopnum(index) {
      if (this.shopGoods[index].ids <= 1) {
        this.shopGoods[index].ids = 1
      } else {
        this.shopGoods[index].ids--
        this.fun()
      }
    },
  },
  created() {
    this.getindexinfo()
    for (var i = 0; i < this.shopGoods.length; i++) {
      this.shopGoods[i].ids = 1
       this.shopGoods[i].flags = false
      console.log(this.shopGoods[i].ids)
    }
    for (var i = 0; i < this.shopGoods.length; i++) {
      this.num += Number(this.shopGoods[i].price)
    }
    this.shoplength = this.shopGoods.length
  },
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
  border-bottom: 0.01rem solid #ccc;
  display: flex;
  justify-content: space-between;
  .goods_photo {
    width: 2.3rem;
    height: 100%;
    text-align: center;
    line-height: 2.2rem;
    img {
      width: 1.7rem;
      height: 1.8rem;
    }
  }
  .goods_info {
    flex: 1;
    p {
      margin: 0;
      padding: 0;
      font-size: 0.24rem;
      margin-top: 0.1rem;
    }
    button {
      width: 0.82rem;
      height: 0.64rem;
      background: #f9f9f9;
      border: 1px solid #ccc;
    }
  }
}
.null_shopcar {
  width: 100%;
  height: 2rem;
  // position: absolute;
  top: 0.8rem;
  background: #fff;
  line-height: 4rem;
  text-align: center;
  z-index: 10;
  font-size: 0.4rem;
  color: #ccc;
  button {
    border: 1px solid #ccc;
    padding: 0.1rem;
    margin-left: 0.1rem;
  }
}

.phone_info {
  width: 48%;
  height: 4.82rem;
  margin-left: 1%;
  float: left;
  margin-top: 0.1rem;

  .phone_photo {
    width: 100%;
    height: 3.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 0.24rem;
    color: #757575;
    text-indent: 0.2rem;
    margin-top: 0.1rem;
  }
}

footer {
  width: 100%;
  height: 0.88rem;
  position: fixed;
  bottom: 0.88rem;

  .footer_box {
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 0.88rem;
    font-size: 0.24rem;
    color: #b8b8b8;
    bottom: 0.88rem;
    p {
      margin: 0;
      padding: 0;
    }
  }
}
</style>



