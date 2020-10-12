<template>
  <div>
    <div class="box">
      <p @click="fn"><</p>
      <img :src="$store.state.obj.img" alt="" />
      <div class="content">
        <h1>{{ $store.state.obj.name }}</h1>
        <div class="p">{{ $store.state.obj.info }}</div>
        <div class="money">￥{{ $store.state.obj.price }}</div>
        <img :src="$store.state.obj.info_img[0].img" alt="" />
        <img :src="$store.state.obj.info_img[1].img" class="qq" alt="" />
      </div>
      <footer>
        <div class="footer-content" @click="fn1">
          <i class="iconfont icon-zhuye"></i>
          <span>首页</span>
        </div>
        <div class="footer-content" @click="fn2">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </div>
        <div class="btn">加入购物车</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maximg: ''
    }
  },
  created() {},
  methods: {
    fn() {
      this.$router.push('index')
    },
    fn1() {
      this.$router.push('shopcar')
    },
    fn2() {}
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  p {
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
  }
  img {
    width: 100%;
    height: 6rem;
  }
  .content {
    width: 100%;
    padding-left: 0.3rem;
    img {
      height: 10rem;
    }
    .qq {
      height: 6rem;
      margin-top: -1rem;
    }
    h1 {
      font-size: 0.3rem;
    }
    .p {
      font-size: 0.24rem;
    }
    .money {
      color: red;
      font-size: 0.3rem;
      margin-top: 0.15rem;
    }
  }
  footer {
    width: 88%;
    height: 1rem;
    border-radius: 0.1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    background: #fff;
    margin-left: 0.4rem;
    .footer-content {
      width: 1rem;
      height: 1rem;
      margin-left: 0.2rem;
      text-align: center;
      float: left;
      .icon-zhuye:before {
        content: '\f0005';
        position: absolute;
        top: 0;
        left: 0.5rem;
      }
      span {
        font-size: 0.2rem;
      }
    }
    .icon-gouwuche:before {
      content: '\e628';
      position: absolute;
      top: 0;
      left: 1.7rem;
    }
    .btn {
      width: 2rem;
      height: 0.6rem;
      background: #ff6700;
      position: absolute;
      right: 0;
      top: 0.2rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 0.12rem;
    }
  }
}
</style>
