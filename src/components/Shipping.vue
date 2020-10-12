<template>
  <div>
    <header>
      <div class="a" @click='fn'> < </div>
      收货地址 
      <i class="iconfont icon-sousuo"></i>
    </header>
    <div class='concat'>
        <ul v-for = 'item in shipData' :key='item.id'> 
          <li class='li1'><h2>{{item.name}}</h2> <p>{{item.phone}}</p>  <h1>删除</h1></li>
          <li class='li2'>
            <div>{{item.address_info}}</div>
            <div>{{item.address_region}}</div>
            <div class="d">></div>
          </li>
        </ul>
   
    </div>
    <footer @click='fun'>

        <p>新建收货地址</p>
    </footer>
  
  </div>
</template>
<script>
export default {
    data(){
      return{
      shipData:''
      }
    },
    created(){
      this.$axios.get('/data/address.json')
      .then(res=>{
        console.log(res.data);
        this.shipData = res.data
      })
    },
    methods:{
      // 跳转我的页面
      fn(){
        this.$router.push('mine')
      },
      // 跳转到新增地址页面
      fun(){
        this.$router.push('NewShipping')
      }
    }
}
</script>
<style scoped lang='less'>

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
.concat{
  width: 100%;
  margin-top: 1.2rem;
   
  ul{
    margin: .3rem;
    border: 1px solid #ccc;
  .li1{
      display: flex;
      flex-flow:  row nowrap;
      justify-content: space-between;
      text-align: center;
      border-bottom:1px solid #ccc;
      padding-left: .3rem;
      padding-right: .2rem;
     
   h2{
         font-size: .3rem;
         color: #FF6600;
   }
      p{
           font-size: .3rem;
           color: #000;
      }
      h1{
         font-size: .3rem;
         color: #ccc;
      }
    }


    .li2{
      padding: .2rem;
      position: relative;
        div{
          font-size: .3rem;
          padding-left: .1rem;
             color: #000;
        }
        .d{
          position: absolute;
          right: .2rem;
          top: .5rem;

        }
    }
  }
}
footer{
  width: 100%;
  height: 0.88rem;
  position: fixed;
  bottom:0;
  left: 0;
  background: #FF6700;
  p{
      font-size: .3rem;
      color: #fff;
      text-align: center;
     
  }
}


</style>