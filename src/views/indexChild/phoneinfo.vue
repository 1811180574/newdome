<template>
  <div>
    <div class="content">
      <div class="phone_picture">
        <img :src="topImg" alt="" />
      </div>
      <p
        style="font-size:0.48rem;line-height:0.86rem;width: 96%;margin-left:2%;"
      >
        {{ getinfo.name }}
      </p>
      <p style="font-size:0.28rem;color:#C1C0C1;width: 96%;margin-left:2%;">
        {{ getinfo.info }}
      </p>
      <p
        style="color:#FF7F00;font-size:0.42rem;line-height:0.8rem;width: 96%;margin-left:2%;"
      >
        ￥{{ getinfo.price }}
      </p>
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
        <div class="bttom_top" style="width:100%;height:11.2rem;">
          <img :src="bottomImg" alt="" />
        </div>
        <!-- 手机文字图片 -->
        <div class="bttom_top" style="width:100%;height:7.2rem;">
          <img :src="botttomImgTwo" alt="" />
        </div>

        <!-- vant加入购物车 -->
        <van-goods-action  class="minshopcar" >
          <van-goods-action-icon icon="chat-o" text="客服" style="border-radius:0.2rem;" />
          <van-goods-action-icon
            icon="cart-o"
            text="购物车"
            :badge="this.$store.state.shopGoods.length"
          />
          <van-goods-action-button
          class="addButton"
            type="danger"
            text="加入购物车"

            @click="addShopcar()"
          />
          <!-- <van-goods-action-button type="danger" text="立即购买" /> -->
        </van-goods-action>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      getinfo: [],
      //下边图片的手机图片
      bottomImg: '',
      //下边图片的手机文字图片
      botttomImgTwo: '',
      topImg: '',
      //从localstorage里面拉取
      shopcarlength: Number(localStorage.getItem('shopnumber')),
      //要传给vuex里面的数组
      shoparr: [],
    }
  },
  created() {
    this.indexInfo()
  },
  methods: {
    //加入购物车的函数
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      Toast('点击按钮')
    },
    //获取首页的数据渲染到详情页
    async indexInfo() {
      const { data: res } = await this.$axios.get('/data/homeGoods.json')
      this.getinfo = res[this.$route.params.ind]
      this.topImg = this.getinfo.imgList[1].img

      this.bottomImg = this.getinfo.info_img[0].img
      this.botttomImgTwo = this.getinfo.info_img[1].img
    },
    //加入购物车的时候将 this.getinfo 存储到sessionStiorge里面
    addShopcar() {
      this.$dialog.alert({
        message: '添加成功',
      })

      // this.shoparr.push(this.getinfo)
      this.$store.commit('addshopcar', this.getinfo)
    },
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.phone_picture {
  width: 100%;
  height: 7.04rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.choose {
  width: 100%;
  height: 1.64rem;
  line-height: 0.82rem;
  text-align: center;
  font-size: 0.24rem;
  .text {
    float: left;
    background: #fafafa;
    width: 20%;
    height: 100%;
  }
  .name {
    width: 100%;
    height: 0.82rem;
  }
  .loction {
    width: 100%;
    height: 0.82rem;
  }
}
//下面的图片
.bottom_img {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .add_shopcar {
    width: 92%;
    height: 0.86rem;
    margin-left: 4%;
    background: #fff;
    position: absolute;
    bottom: 0.2rem;
    border-radius: 0.2rem;
    ul li {
      float: left;
      list-style: none;
      padding-left: 0.34rem;
      text-align: center;
      line-height: 0.4rem;
      i {
        font-size: 0.3rem;
      }
      button {
        width: 2.54rem;
        height: 0.6rem;
        background: #f56600;
        border: none;
        border-radius: 0.2rem;
        font-size: 0.36rem;
        color: #fff;
      }
    }
  }
}

.minshopcar{
  width:94%;
  margin-left:3%;
  border-radius:0.2rem;
  position: absolute;
  bottom:0.2rem;
  .addButton{
    width: 1.5rem !important;
  }

}
</style>
