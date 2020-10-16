<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style lang="less" scoped>
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
}
</style>
