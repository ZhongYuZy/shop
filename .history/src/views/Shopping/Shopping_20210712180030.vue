<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="sop">购物车</div>
        </div>
      </template>
    </Top>
    <div v-if="show">
      <div class="box1">
        <img src="../../assets/order.gif" class="img" />
      </div>
      <div class="box2"><van-button type="primary" class="btn" @click="onclick">立即登录</van-button></div>
    </div>
    <div v-if="list.length===0">
        <div>
          <img src="../../assets/shop.png">
        </div>
    </div>
    <div v-else>
      <div v-for="(item , index) in list" :key="index" class="xiang">
        <div id="ipt">
          <input type="checkbox" class="ipt">
        </div>
        <div id="img">
          <img :src="item.image_path" class="img">
        </div>
        <div>
          <div class="name">{{item.name}}</div>
          <div>
            <div class="price">{{item.mallPrice}}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      show: false,
    };
  },
  components: {},
  methods: {
    getCard() {
      this.$api
        .getCard()
        .then((res) => {
          console.log(res);
          this.list = res.shopList;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    onclick(){
      this.$router.push('/login')
    }
  },
  mounted() {
    this.getCard();
    if (!localStorage.getItem("nickname")) {
        this.show = true;
    }
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 360px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 {
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100%;
  height: 350px;
}
.box2{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.btn{
  width: 150px;
}
.xiang{
  display: flex;
  width: 100%;
  height: 110px;
}
#img{
  width: 90px;
  height: 90px;
  border: 1px solid #eee;
  margin-left: 10px;
}
.img{
  width: 80px;
  height: 80px;
}
#ipt{
  height: 70px;
  display: flex;
  align-items: center;
}
.ipt{
  width: 15px;
  height: 15px;
}
.name{
  font-size: 13px;
  margin: 10px 0 15px 8px;
}
.price{
  font-size: 14px;
  margin: ;
}
</style>