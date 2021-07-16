<template>
  <div>
    <div class="icon" @click="onclick">
      <van-icon name="arrow-left" />
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item , index) in ">
          <img :src="goodsOne.image_path"  @change="onChange"/>
        </van-swipe-item>
         <van-swipe-item >
          <img :src="goodsOne.image"  @change="onChange">
          <template v-slot:index>第{{ index }}页</template>
        </van-swipe-item>
      </van-swipe>
      <div class="title">{{goodsOne.name}}</div>
      <div class="Price">￥{{goodsOne.orl_price}}</div>
    </div>
    <div class="middle">
      <div class="freight">运费：0</div>
      <div class="surplus">剩余：{{goodsOne.amount}}</div>
      <div class="Collection" @click="onlike">
        <div v-if="like === true">
          收藏：
          <van-icon class="like" name="like-o" />
        </div>
        <div v-if="like !== true">
          取消收藏：
          <van-icon name="like" class="like-o" />
        </div>
      </div>
    </div>
    <div class="tail">
      <div class="left">
        <van-icon name="shop-o" class="o" />
        <div class="shop">有赞的店</div>
        <div class="official">官方</div>
      </div>
      <div class="right">
        <div class="store">进入店铺</div>
        <van-icon name="arrow" class="arrow" />
      </div>
    </div>
    <div id="comment">
      <van-tabs type="card" class="tab">
        <van-tab title="商品详情" class="details">
          <div  v-html="goodsOne.detail" class="xiang">
          </div>
        </van-tab>
        <van-tab title="商品评论" class="comment">商品评论</van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  name: "",
  props: {},
  data() {
    return {
      id:null,
      like: true,
      index:0,
      goodsOne: {},
    };
  },
  components: {},
  methods: {
     onChange(index) {
      this.index = index;
    },
    onclick(){
      this.$router.back()
    },
    onlike() {
      this.like = !this.like;
    },
     goodOne(){
      this.$api.goodOne(this.id).then((res) => {
        // console.log(res);
        this.goodsOne=res.goods.goodsOne
        // console.log( this.goodsOne);
      }).catch((err) => {
        console.log('请求失败', err);
      })
    }
  },
  mounted() {
    this.id=this.$route.query.id
   this.goodOne()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #7f7f7f;
  margin: 10px 5px;
}
.title {
  font-size: 18px;
  width: 100%;
  margin: 5px 0;
}
.Price {
  color: red;
}
.middle {
  margin-top: 15px;
  width: 100%;
  display: flex;
  color: #7f7f7f;
}
.freight {
  flex: 1;
  margin-left: 10px;
}
.surplus {
  flex: 1;
}
.Collection {
  margin-left: 25px;
  flex: 1;
}
.like {
  margin-left: 3px;
  font-size: 17px;
}
.like-o {
  font-size: 18px;
  color: red;
}
.tail {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  margin-left: 10px;
}
.right {
  display: flex;
  margin-right: 15px;
}
.store {
  margin: 0 3px 0 0;
}
.o {
  font-size: 20px;
}
.arrow {
  font-size: 19px;
}
.shop {
  margin: 0 10px;
}
.official {
  display: flex;
  justify-content: center;
  width: 40px;
  height: 18px;
  background-color: red;
  color: #fff;
}
#comment {
  margin-top: 30px;
  width: 100%;
  display: flex;
}
.details {
  display: flex;
  justify-content: center;
  flex: 1;
}
.comment {
  display: flex;
  justify-content: center;
  flex: 1;
}
.tab {
  width: 100%;
}
.swipe img {
  width: 100%;
  height: 300px;
}
.xiang{
  margin-top: 10px;
}
</style>