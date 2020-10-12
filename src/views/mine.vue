<template>
  <div>
    <header>
          <div class="touxiang"> </div>
          <span>134234238423</span>
    </header>
    <div class="nav">
      <li>
          <p>我的订单</p>
          <p>全部订单 > </p> 
         
      </li>
    </div>
    <div class="nav-a">
        <li>
            <i class='iconfont icon-gouwuche'></i>
            <p>待付款</p>
        </li>
         <li>
            <i class='iconfont icon-youhuiquan'></i>
            <p>待付款</p>
        </li>
         <li>
            <i class='iconfont icon-dibudaohanglan-'></i>
            <p>待付款</p>
        </li>
    </div>
    <div class="hz"></div>

    <div class="nav-b">
        <div class="t">
              <i class='iconfont icon-02'></i>
        </div>
        <ul>
          <li class='li1'>
            <p>会员中心</p>
            <p>></p>
          </li>
        </ul>
        <!-- ------------------------------- -->
        <div class="t">
              <i class='iconfont icon-dizhi'></i>
        </div>
        <ul @click='fn'>
          <li class='li2'>
            <p>收货地址</p>
            <p>></p>
          </li>
        </ul>
    </div>
    <div class="hz"></div>
    <div class="nav-b">
        <div class="t">
              <i class='iconfont icon-youhuiquan'></i>
        </div>
        <ul>
          <li class='li1'>
            <p>我的优惠</p>
            <p>></p>
          </li>
        </ul>
        <!-- ------------------------------- -->
        <div class="t">
              <i class='iconfont icon-message'></i>
        </div>
        <ul>
          <li class='li2'>
            <p>我的意见</p>
            <p>></p>
          </li>
        </ul>
    </div>
    <div class="hz"></div>
       <div class="nav-b">
        <div class="t">
              <i class='iconfont icon-liulanjilu'></i>
        </div>
        <ul>
          <li class='li1'>
            <p>浏览记录</p>
            <p>></p>
          </li>
        </ul>
        <!-- ------------------------------- -->
        <div class="t">
              <i class='iconfont icon-erweima'></i>
        </div>
        <ul>
          <li class='li2'>
            <p>我的名片</p>
            <p>></p>
          </li>
        </ul>
    </div>
    <div class="hz"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
        fn(){
         this.$router.push('Shipping')
        }
    },
    
  }
</script>

<style lang="less" scoped>

  header{
    width: 100%;
    height: 2rem;
    background: #F37D0F;
    .touxiang{
      width: 1.2rem;
      height: 1.2rem;
      background: #fff;
      border-radius: 50%;
      float: left;
      margin-left: .2rem;
      margin-top: .3rem;
    }
    span{
      font-size: .4rem;
      float: left;
      line-height: 1.8rem;
      padding-left: .3rem;
      color: #fff;
    }
  }
  .nav{
    width: 100%;
    border-bottom :1px solid #D9D9D9;
    li{
      font-size: .3rem;
      list-style: none;
      display: flex;
      flex-flow:  row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 0rem .2rem;
      p{
        line-height: .5rem;
      }
    }
  }
  .nav-a{
    width: 100%;
    height: 2rem;
    background: #fff;
    display: flex;
      
    li{
      width: 33.33%;
        font-size: .3rem;
        list-style: none;
        justify-content:space-around;
        text-align: center;
        margin-top: .3rem;
        
    }
  }
  .hz{
    width: 100%;
    height: .2rem;
    background:#F5F5F5;
  }
  .nav-b{
    width: 100%;
    height: 2.3rem;
  .t{
    width: 15%;
    float: left;
    text-align: center;
    line-height: .8rem;
  }
    ul{
         float: left;
        width: 85%;
        .li1{
        font-size: .36rem;
        list-style: none;
        display: flex;
        flex-flow:  row nowrap;
        justify-content: space-between;
        border-bottom: 1px solid #D9D9D9;
        padding: 0rem .2rem;
      }
    }


     .t{
    width: 15%;
    float: left;
    text-align: center;
    line-height: .8rem;
  }
    ul{
         float: left;
         width: 85%;
      .li2{
        font-size: .36rem;
        list-style: none;
        display: flex;
        flex-flow:  row nowrap;
        justify-content: space-between;
        padding: 0rem .2rem;
      }
    }
  }
</style>