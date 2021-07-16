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
      <div class="Collection" @click="collect">
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
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="Shopping"
        :badge='get'
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCarCheck"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="danger" />
      <van-popup
        v-model="olike"
        closeable
        position="bottom"
        :style="{ height: '33%' }"
      >
        <div id="box">
          <div id="img">
            <img :src="goodsOne.image_path" class="img" />
          </div>
          <div class="name">
            <div class="title">{{ goodsOne.name }}</div>
            <div class="money">{{ goodsOne.orl_price }}</div>
          </div>
        </div>
        <div class="box1">
          <div class="purchase">
            <div>购买数量</div>
            <div class="get">
              <div class="on">剩余:{{ goodsOne.amount }}</div>
              <div class="restrictions">每人限购50件</div>
            </div>
          </div>
          <div class="Stepper">
            <van-stepper v-model="value" />
          </div>
        </div>
        <van-button
          type="danger"
          class="button"
          @click="checkLogin"
          >立即购买</van-button
        >
      </van-popup>
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Toast } from "vant";

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
      value: 1,
      Collection: -1,
      goods: [],
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
    // 进去页面当前商品是否收藏
    getIsCollection() {
      this.$api
        .isCollection(this.id)
        .then((res) => {
          this.Collection = res.isCollection;
          // console.log(this.isCollection);
          if (this.Collection === 0) {
            this.like = true;
          } else {
            this.like = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //收藏按钮判断登录状态
    collect() {
      this.$utils.checkLogin({
        key: "nickname",
        next: this.checkcollect,
        item: this.Collection,
      });
    },
    //收藏
    checkcollect(val) {
      // console.log(this.goods);
      if (val === 0) {
        this.$api
          .collection(this.goodsOne)
          .then((res) => {
            console.log(res);
            this.like = false;
            Toast("收藏成功");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$api
          .cancelCollection(this.id)
          .then((res) => {
            console.log(res);
            this.like = true;
            Toast("取消收藏");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.getIsCollection();
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
    Shopping() {
      // 检测用户是否登录
      this.$utils.checkLogin({
        key: "nickname",
        next:this.goto,
      });
    },
    goto(){
      this.$router.push('/Shopping')
    },
    addCart() {
      localStorage.setItem('goodsOne' ,JSON.stringify this.goodsOne)
    },
    checkLogin(item) {
      // 检测用户是否登录
      this.$utils.checkLogin({
        key: "nickname",
        next: this.addCart,
        item: item,
      });
    },
    addCarCheck() {
      // 检测用户是否登录
      this.$utils.checkLogin({
        key: "nickname",
        next: this.warning,
      });
    },
    warning() {
      this.$api
        .addShop(this.goodsOne.id)
        .then((res) => {
          console.log(res);
          this.$api
            .getCard()
            .then((res) => {
              console.log(res);
              localStorage.setItem('badge' , res.shopList.length)
              this.$store.commit('setbadge' ,res.shopList.length )
            })
            .catch((err) => {
              console.log("请求失败", err);
            });
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.goodOne();
    this.getIsCollection();
  },
  computed: {
    get(){
      return this.$store.state.badge
    }
  },
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
  border: 1px solid #eeeeee;
  width: 80px;
  height: 80px;
  margin-left: 15px;
}
.img {
  width: 70px;
  height: 70px;
}
#box {
  display: flex;
}
.name {
  margin-left: 15px;
  margin-top: 10px;
}
.title {
  margin-bottom: 8px;
  font-size: 13px;
}
.money {
  color: red;
}
.on {
  width: 90px;
  margin-top: 10px;
  color: gray;
}
.box1 {
  display: flex;
  margin-top: 15px;
}
.restrictions {
  margin-top: 10px;
  color: red;
}
.get {
  display: flex;
}
.Stepper {
  margin-left: 40px;
}
.button {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 35px;
}
</style>