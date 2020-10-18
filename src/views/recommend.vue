<template>
  <div>
     <div class="header">
           <img class="img1" src="../assets/img/home/back.png" alt="">
           <div class="title">分类</div>
           <img  class="img2" src="../assets/img/search/search.png" alt="">
     </div>
     <div class="content">
              <div class="content-left">
                     <ul>
                       <li @click="clickitem(index)"
                        :class="index===currentIndex?'active':''" 
                         v-for="(item,index) in recommendArr"
                       :key="index">{{item.left}}</li>
                                    
                     </ul> 
              </div>
              <div class="content-right" ref="rightli">
                <div class="box">
                     <div class="container"  v-for="(item,index) in recommendArr" :key="index">
                          <div class="top">
                              <img :src="item.info[0].title_img" alt="">
                          </div>
                          <div class="container-title">{{item.left}}</div>
                            <div class="bottom">
                                <div class="bottom-content" v-for="(item1,index) in item.info[0].list" :key="index">
                                      <img :src="item1.img" alt="">
                                      <div class="font">{{item1.name}}</div>
                                </div>
                                
                            </div>
                            <div class="foot">查看更多</div>                        
                      </div>
                  </div>
              </div>
     </div>

  </div>
</template>

<script>
import Bscroll from 'better-scroll'
  export default {
    data(){
      return{
        recommendArr:[],
        scrollY:0,
        rightTops:[],
        
        
      }
    },
     computed:{
         currentIndex(){
           return  this.rightTops.findIndex((item,index)=>{
                    this.leftMove(index)
                 return this.scrollY>=item&&this.scrollY<this.rightTops[index+1]
             })
         }
        
      },
      
    methods:{
        recommend(){
          this.$axios.get("/data/data.json")
          .then(res=>{
            console.log(res.data)
          this.recommendArr=res.data
          })
        },
        //实现滚动
        _initScroll () {
                new Bscroll('.content-left', {
                    // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
                    click: true
                });
              this.rightBcorll = new Bscroll('.content-right', {
                 
                    probeType:3
                });
                //实现右边滚动左边跟着滚动
                  this.rightBcorll.on("scroll",(pos)=>{
                   this.scrollY=Math.floor(Math.abs(pos.y))
                
             }) 
               
        },
           _initrightLiTops(){
             let lis=this.$refs.rightli.querySelectorAll('.container');
              let tempArr=[]
              let top=0
              tempArr.push(top)
              for(let i=0;i<lis.length;i++){
                  top+= lis[i].clientHeight
                  tempArr.push(top)               
              }
              this.rightTops=tempArr
          
          },
        //点击左侧导航变颜色
        clickitem(i){
          console.log(i)
        
           this.scrollY=this.rightTops[i] 
           this.rightBcorll.scrollTo(0,-this.scrollY)
        },
         leftMove(){

         }


       
        
    },
        
      
    created(){
      this.recommend()
         
    },
    watch:{
        recommendArr(){
          this.$nextTick(() => {
                this._initScroll();
                this._initrightLiTops()  
            });
        }
        
    }
    
  }
</script>

<style lang="less" scoped>
   .header{
     width: 100%;
     height:1rem;
     background:#F2F2F2;
     line-height:1rem;
     text-align: center;
     .title{
       font-size: 0.36rem;
       color: #666666;
     }
     .img1{
         width: 0.5rem;
         height: 0.5rem;
           position: absolute;
            left: 0.3rem;
            top: 0.26rem;
     }
     .img2{
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            right: 0.3rem;
            top: 0.26rem;
          
     }
   }
   .content{
     position: absolute;
     width: 100%;
     height:90%;
     display: flex;
     overflow: hidden;
     .content-left{
       width: 20%;
       height:12rem;
       background:#FAFAFA ;
       overflow: hidden;
        ul{height:14.5rem;} 
           li{
       width:99%;
       height:1rem;
       font-size: 0.3rem;
       text-align: center;
       line-height:1rem;
       float: left;
       color: #747674;
     }
      .active{
        border-right:0.1rem solid red !important;
        color: red !important;
        background:#fff !important;
   }
       
     }
     .content-right{
       width: 80%;
       overflow: hidden;
      .box{
        height:115rem;
      }
       .top{
         width:100%;
         height:2.2rem;
        
         img{
           width:5.4rem;
           height:2rem;
           margin-left: 0.3rem;
         }
       }
       .container-title{
         font-size: 0.4rem;
         text-align: center;
         margin-top: 0.3rem;
         margin-bottom: 0.3rem;
       }
       .bottom{
         width: 100%;
         height:4rem;
       
         display: flex;
         text-align: center;
          flex-wrap: wrap;
         .bottom-content{
             width:33.33%;
             height:1.6rem;
             img{
               width:1.2rem;
               height:1.2rem;
             }
             .font{
                font-size: 0.3rem;
                color: #666666;
             }
         }
         
       }
       .foot{
         width:5rem;
         height: 0.6rem;
         background: #F9F5E6;
         color: #AEA38D;
         font-size: 0.4rem;
         text-align: center;
         line-height: 0.6rem;
         margin: auto;
   
       }
     }
    
   }
  
</style>