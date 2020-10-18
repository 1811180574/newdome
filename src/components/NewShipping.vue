<template>
    <div>
        <header>
          <div class="a" @click='fn'> < </div>
          新增收货地址 
          <i class="iconfont icon-sousuo"></i>
        </header>
        <ul>
          <li>
           <span>姓名：</span> <input type="text" placeholder="请输入姓名">
          </li>
          <li>
           <span>手机号：</span> <input type="text" placeholder="手机号">
          </li>
          <li>
           <span>所在地区：</span> <input type="text" placeholder="省市 区 街道">
          </li>
             
          <li>
           <span>详细地址：</span> <input type="text" placeholder="详细地址">
          </li>
        </ul>
        <div class='s'>
             <li>
                <span>设置默认地址</span> <input type="checkbox" >
             </li>
        </div>
        <footer>

            <p @click='fun'>保存地址</p>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
      // 返回到上一级我的页面
      fn(){
        this.$router.push('mine')
      },
      // 跳转到收货页面
      fun(){
        this.$router.push('Shipping')
      }
    }
}
</script>
<style scoped lang="less">
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
ul{
  margin-top: 0.82rem;
  width: 100%;
    li{
      height: 1rem;
      border-bottom:1px solid #ccc;
   
      span{
        padding-left: .4rem;
        font-size: .3rem;
        float: left;
        line-height: 1rem;
      }
      input{
        width: 70%;
        float: left;
        border:none;
        line-height: .9rem;
        font-size: .3rem;
        
      }
     
    }
}
.s{
  width: 100%;
  li{
    list-style: none;
       height: 1rem;
         span{
        padding-left: .4rem;
        font-size: .3rem;
        float: left;
        line-height: 1rem;
      }
      input{
        float: left;
        border:none;
        margin-top: .35rem;
        margin-left: .2rem;
        font-size: .4rem;
        
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