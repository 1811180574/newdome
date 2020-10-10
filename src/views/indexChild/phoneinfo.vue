<template>
  <div>
    <div class="content">
      <!-- v-for="(item,index) in getinfo" :key="index" -->
      <div class="phone_picture" >
        <img :src="topImg" alt="">
      </div>
      <p>{{getinfo.name}}</p>
      <p style="font-size:0.28rem;">{{getinfo.info}}</p>
      <p>￥{{getinfo.price}}</p>
      <div class="choose">
        <div class="name">
          <div class="text">已选</div>
          <div class="text" style="width:60%;"></div>
          <div class="text">></div>     
        </div>
        <div class="loction">
          <div class="text">送至</div>
          <div class="text" style="width:60%;"></div>
          <div class="text">></div>
        </div>
      </div>

      <div class="bottom_img">
        <img :src='bottomImg' alt="">

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        getinfo:[],
        bottomImg:'',
        topImg:'',
      }
    },
    created(){
      this.indexInfo()
    },
    methods:{
      //获取首页的数据渲染到详情页
      async indexInfo(){
        const{data:res}  = await this.$axios.get('/data/homeGoods.json')
        console.log(res)
        this.getinfo = res[this.$route.params.ind]
        console.log(this.getinfo)
        this.topImg = this.getinfo.imgList[1].img
        console.log(this.bottomImg)

      }
    }
    
  }
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.phone_picture{
  width: 100%;
  height: 7.04rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.choose{
  width: 100%;
  height: 1.64rem;
  line-height: 0.82rem;
  text-align: center;
  font-size:0.24rem;
  .text{
    float: left;
    background:#FAFAFA;
    width: 20%;
    height: 100%;
  }
  .name{
    width: 100%;
    height: 0.82rem;
  }
  .loction{
    width: 100%;
    height: 0.82rem;
  }
}
//下面的图片
.bottom_img{
  width: 100%;
  height: 15.62rem;
  img{
    width: 100%;
    height: 100%;
  }
}

</style>