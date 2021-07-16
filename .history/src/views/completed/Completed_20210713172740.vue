<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">已完成</div>
        </div>
      </template>
    </Top>
    <van-tabs v-model="active">
      <van-tab title="全部">全部</van-tab>
      <van-tab title="待支付">待支付</van-tab>
      <van-tab title="待发货">待发货</van-tab>
      <van-tab title="待收货">待收货</van-tab>
      <van-tab title="已完成">
        <div v-for="(item, index) in list" :key="index">
          <div class="app">
            <div class="box">
              <div>订单编号:{{ item.order_id }}</div>
              <div v-for="(item1 , index1) in item.order_list" :key="index1">
                <div class="xaing">
                  <div id='img'>
                    <img :src="item1.image_path"  class="img"/>
                  </div>
                  <div>{{item1.name}}</div>
                  <div>
                    <div>￥{{item1.mallPrice}}</div>
                    <div>X{{item1.count}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active: 4,
      list: [],
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then((res) => {
          console.log(res);
          this.list = res.list;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.getMyOrder();
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
.app {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 220px;
  background-color: #f2f2f2;
}
.box {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 94%;
  height: 200px;
  background-color: #fff;
}
.xaing {
  display: flex;
}
#img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
}
.img{
  width: 70px;
  height: 70px;
  margin: 10px 10px 0 10px;
}
</style>