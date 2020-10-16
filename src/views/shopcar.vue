<template>
  <div>
<<<<<<< HEAD
<<<<<<< HEAD
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
        <p>共件金额:</p>
        <p><b style="color:#FF5722;font-size:0.42rem;">10000</b>元</p>
      </div>
      <div class="footer_box" style="background:#F4F4F4; font-size:0.26rem;">继续购物</div>
      <div class="footer_box" style="background:#FF6700; font-size:0.26rem;color:#fff;">去结算</div>

    </footer>
=======
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
    <div class="box">
      <header>
        <div class="a">
          <
        </div>
        购物车
        <i class="iconfont icon-sousuo"></i>
      </header>
      <div class="box-content-top">
        <p>登录后享更多优惠</p>
        <span @click="btn">去登陆></span>
      </div>
      <div class="content-conter">
        <p>购物车还是空的</p>
        <div class="stroll">去逛逛</div>
        <div class="boss" v-for="(item, index) of data" :key="index">
          <img :src="item.img" alt="" />
          <div class="r">
            <div class="s1">{{ item.name }}</div>
            <div class="s2">{{ item.price }}</div>
            <div class="bb">
              <div class="relief">-</div>
              <div class="num">2</div>
              <div class="add">+</div>
            </div>
            <i class="iconfont icon-dustbin_icon"></i>
          </div>
        </div>
      </div>
      <div class="headline">
        <p>猜你喜欢</p>
        <p>实时推荐</p>
      </div>
      <ul>
        <li @click="fn(item)" v-for="item of dataAll" :key="item.id">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.content }}</p>
          <p>￥{{ item.price }}</p>
        </li>
      </ul>
    </div>
<<<<<<< HEAD
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
      shopGoods:this.$store.state.shopGoods
      // shopGoods:JSON.parse(localStorage.getItem('shopgoods'))

    }
  },
  created(){
    console.log(this.shopGoods)
    console.log(JSON.parse(localStorage.getItem('shopgoods')))
=======
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
      dataAll: [],
      arr: [],
      data: []
    }
  },
  methods: {
    //渲染数据
    qq() {
      this.$axios.get('/data/homeGoods.json').then(res => {
        this.dataAll = res.data
      })
    },
    //点击跳转登录页面
    btn() {
      this.$router.push('/mine')
    },
    //点击详情页
    fn(i) {
      this.$store.commit('data', i)
      this.$router.push('particulars')
    }
  },
  created() {
    //数据初始化
    this.qq()
    //接收数据
    // let arr = []
    // arr.push(JSON.parse(sessionStorage.getItem('key')))
    // console.log(arr)
    // this.data = arr
<<<<<<< HEAD
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
  }
}
</script>

<style lang="less" scoped>
<<<<<<< HEAD
<<<<<<< HEAD
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
  height: 90vh;
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

=======
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
.box {
  width: 100%;
  background: #fff;
  header {
    width: 100%;
    height: 0.82rem;
    position: fixed;
    top: 0;
    background: #f2f2f2;
    display: flex;
    line-height: 0.82rem;
    font-size: 0.3rem;
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    box-sizing: border-box;
    justify-content: space-between;
    .icon-dibudaohanglan-:before {
      content: '\e629';
    }
    .a {
      font-size: 0.4rem;
    }
  }
  .box-content-top {
    width: 100%;
    height: 1.1rem;
    margin-top: 0.84rem;
    line-height: 1.1rem;
    text-indent: 0.5rem;
    position: relative;
    p {
      font-size: 0.35rem;
    }
    span {
      position: absolute;
      right: 0.3rem;
      top: -0.02rem;
      font-size: 0.3rem;
      color: #757575;
    }
  }
  .content-conter {
    width: 100%;
    background: #fff;
    font-size: 0.31rem;
    color: #ababab;
    line-height: 1.14rem;

    p {
      margin-top: -0.05rem;
      float: left;
      margin-left: 1.4rem;
      margin-right: 0.8rem;
      margin-bottom: 0;
    }
    .stroll {
      width: 1.2rem;
      float: left;
      height: 0.4rem;
      border: 0.05rem solid #ababab;
      margin-top: 0.3rem;
      text-align: center;
      line-height: 0.4rem;
      color: black;
    }
    .boss {
      width: 86%;
      height: 2rem;
      margin: auto;
      clear: both;

      .icon-dustbin_icon:before {
        content: '\e659';
        font-size: 0.5rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      img {
        width: 2rem;
        height: 2rem;
        float: left;
      }
      .r {
        width: 4rem;
        position: relative;
        margin-left: 0.1rem;
        float: left;
        height: 100%;
        .s1 {
          position: absolute;
          top: -0.2rem;
          height: 0.5rem;
          font-size: 0.3rem;
          color: black;
        }
        .s2 {
          position: absolute;
          top: 0.7rem;
          font-size: 0.2rem;
          color: #ababab;
          line-height: 0.4rem;
        }
        .bb {
          width: 3rem;
          height: 0.5rem;
          position: absolute;
          top: 1.3rem;
          .relief,
          .add {
            width: 0.5rem;
            height: 0.5rem;
            border: 0.01rem solid #ccc;
            float: left;
            text-align: center;
            line-height: 0.5rem;
            color: black;
          }
          .num {
            width: 0.8rem;
            height: 0.5rem;
            float: left;
            text-align: center;
            line-height: 0.5rem;
            border: 0.01rem solid #ccc;
            color: black;
          }
        }
      }
    }
  }
  .headline {
    width: 100%;
    height: 1rem;
    text-align: center;
    font-size: 0.26rem;
    overflow: hidden;
    p {
      line-height: 0.1rem;
    }
    p:nth-of-type(1) {
      color: #fc8b35;
      font-size: 0.3rem;
    }
  }
  ul {
    width: 100%;
    li {
      width: 49%;
      font-size: 0.35rem;
      display: block;
      float: left;
      margin-right: 0.02rem;
      img {
        width: 100%;
        height: 3rem;
      }
      p:nth-of-type(2) {
        color: #757575;
        font-size: 0.28rem;
      }
      p:nth-of-type(3) {
        color: red;
        font-size: 0.28rem;
      }
    }
  }
<<<<<<< HEAD
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
=======
>>>>>>> e457143650f00ed8b2eda8f7c7feda72e541b5bd
}
</style>
