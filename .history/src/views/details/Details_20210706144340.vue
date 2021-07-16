<template>
  <div>
    <div class="icon">
      <van-icon name="arrow-left" />
    </div>
    <div class="middle">
      <div class="freight">运费：0</div>
      <div class="surplus">剩余：1000</div>
      <div class="Collection" @click="onlike">
        <div v-if="like === true">
          收藏
          <van-icon class="like" name="like-o" />
        </div>
        <div v-if="like !== true">
          取消收藏
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
      <van-tabs type="card">
  <van-tab title="标签 1">商品详情</van-tab>
  <van-tab title="标签 3">商品评论</van-tab>
</van-tabs>
      <div class="details"></div>
      <div class="comment">商品评论</div>
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
export default {
  name: "",
  props: {},
  data() {
    return {
      like: true,
    };
  },
  components: {},
  methods: {
    onlike() {
      this.like = !this.like;
    },
  },
  mounted() {},
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
.middle {
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
  position: absolute;
  right: 35px;
  top: 50px;
  font-size: 18px;
}
.like-o {
  font-size: 18px;
  position: absolute;
  right: 35px;
  top: 50px;
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
  margin-top: 25px;
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
</style>