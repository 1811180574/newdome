<template>
  <div>
    <div class="box">
      <p @click="fn"><</p>
      <img :src="$store.state.obj.img" alt="" />
      <div class="content">
        <h1>{{ $store.state.obj.name }}</h1>
        <div class="p">{{ $store.state.obj.info }}</div>
        <div class="money">￥{{ $store.state.obj.price }}</div>
        <img :src="$store.state.obj.img" alt="" />
      </div>
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
      this.$router.push('shopcar')
    }
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
    height: 8rem;
  }
  .content {
    width: 100%;
    padding-left: 0.3rem;
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
}
</style>
