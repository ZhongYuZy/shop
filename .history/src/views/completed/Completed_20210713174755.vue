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
          <div class="app1">
            <div class="box1">
              <div>订单编号:{{ item.order_id }}</div>
              <div v-for="(item1 , index1) in item.order_list" :key="index1">
                <div class="xaing">
                  <div id='img'>
                    <img :src="item1.image_path"  class="img"/>
                  </div>
                  <div class="name">{{item1.name}}</div>
                  <div id="price">
                    <div class="price">￥{{item1.present_price}}</div>
                    <div class="count">X{{item1.count}}</div>
                  </div>
                </div>
              </div>
               <div class="time">
                  <div>创建时间:{{item.add_time}}</div>
                  <div>收货地址:{{item.address}}</div>
                  <div>共{{item.order_list.length}}件商品 合计:{{}}</div>
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
.app1 {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
}
.box1 {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 94%;
  background-color: #fff;

}
.xaing {
  display: flex;
  margin: 20px 0 ;
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
.name{
  margin-top: 10px;
  margin-left: 15px;
}
#price{
  margin-top: 10px;
  margin-left: 50px;
}
.count{
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
  color: gray;
}
</style>