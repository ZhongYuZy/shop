<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">全部订单</div>
        </div>
      </template>
    </Top>
    <div class="box1">
      <div class="box2">
        <div class="goods">
          <div>收货人:</div>
          <div>136280113131</div>
        </div>
        <div class="address">
          <van-icon name="location-o" class="location" />
          <div class="shou">收货地址:</div>
          <van-icon name="arrow" class="arrow" />
        </div>
      </div>
    </div>
    <div>
      <img src="../../assets/caitiao.jpg" />
    </div>
    <div v-for="(item, index) in obj" :key="index">
      <div class="like"> 
        <div id="img">
          <img :src="item.image_path" class="img" />
        </div>
        <div>
          <div class="name">{{item.name}}</div>
          <div class="jia">
            <div>￥{{item.mallPrice}}</div>
            <div>X{{item.count}}</div>
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
      obj: [],
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
  },
  mounted() {
    this.obj = JSON.parse(this.$route.query.obj);
    console.log(this.obj);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: gray;
  font-size: 16px;
  margin-top: 5px;
}
.order {
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
.box1 {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
}
.box2 {
  width: 80%;
  height: 150px;
}
.goods {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.address {
  position: relative;
  margin-top: 15px;
  display: flex;
}
.location {
  font-size: 25px;
  margin-right: 8px;
}
.shou {
  font-size: 15px;
  display: flex;
  align-items: center;
}
.arrow {
  font-size: 20px;
  position: absolute;
  right: -15px;
}
#img {
  margin-left: 15px;
  width: 110px;
  height: 110px;
  border: 1px solid #eee;
}
.img {
  width: 100px;
  height: 100px;
}
.like{
  display: flex;
}
.jia{
  display: flex;
}
.name{
  color: red;
  font-size: 13px;
  margin-top: 13px;
}
</style>