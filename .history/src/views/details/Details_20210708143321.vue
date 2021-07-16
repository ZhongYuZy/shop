<template>
  <div>
    <div class="icon" @click="onclick">
      <van-icon name="arrow-left" />
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item @click="Change">
          <img :src="goodsOne.image_path" />
        </van-swipe-item>
        <van-swipe-item @click="Change">
          <img :src="goodsOne.image" />
        </van-swipe-item>
      </van-swipe>
      <div class="title">{{ goodsOne.name }}</div>
      <div class="Price">￥{{ goodsOne.orl_price }}</div>
    </div>
    <div>
      <van-image-preview v-model="show" :images="imageList" @change="onChange">
        <template v-slot:index> 第{{ index + 1 }}页</template>  
      </van-image-preview>
    </div>
    <div class="middle">
      <div class="freight">运费：0</div>
      <div class="surplus">剩余：{{ goodsOne.amount }}</div>
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
          <div v-html="goodsOne.detail" class="xiang"></div>
        </van-tab>
        <van-tab title="商品评论" class="comment">商品评论</van-tab>
      </van-tabs>
  
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="checkLogin" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="checkLogin"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="danger" />
      <div id="box1">
        <div>
          <van-popup
            v-model="olike"
            closeable
            position="bottom"
            :style="{ height: '30%' }"
          >
            <div id="box">
              <div id="img">
                <img :src="goodsOne.image_path" class="img" />
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </van-popup>
        </div>
      </div>
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
      show: false,
      id: null,
      like: true,
      index: 0,
      goodsOne: {},
      imageList: [],
      olike: false,
    };
  },
  components: {},
  methods: {
    danger() {
      this.olike = true;
    },
    onChange(index) {
      this.index = index;
    },
    Change() {
      this.show = true;
    },
    onclick() {
      this.$router.back();
    },
    onlike() {
      this.like = !this.like;
    },
    goodOne() {
      this.$api
        .goodOne(this.id)
        .then((res) => {
          // console.log(res);
          this.goodsOne = res.goods.goodsOne;
          console.log(this.goodsOne);
          this.imageList.push(this.goodsOne.image);
          this.imageList.push(this.goodsOne.image);
          // console.log(this.imageList);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    addCart(item) {
      this.$router.push(item);
    },
    checkLogin(item) {
      // 检测用户是否登录
      this.$utils.checkLogin({
        key: "nickname",
        next: this.addCart,
        item: item,
      });
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.goodOne();
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
  margin-top: 5px;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 20px;
  background-color: red;
  color: #fff;
  font-size: 13px;
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
.xiang {
  margin-top: 10px;
}
#img {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  width: 80px;
  height: 80px;
  margin-left: 15px;
}
.img {
  width: 70px;
  height: 70px;
}
#box {
  position: relative;
}
</style>