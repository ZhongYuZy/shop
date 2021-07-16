<template>
  <div>
    <div class="vip">会员中心</div>
    <div class="middle"></div>
    <div class="icon">
      <div class="icon-one">
        <van-icon name="pending-payment" class="pending" />
        <div>待付款</div>
      </div>
      <div class="icon-two">
        <van-icon name="tosend" class="pending" />
        <div>待发货</div>
      </div>
      <div class="icon-three">
        <van-icon name="logistics" class="pending" />
        <div>待收货</div>
      </div>
      <div class="icon-four">
        <van-icon name="orders-o" class="pending" />
        <div>待评价</div>
      </div>
      <div class="icon-fife">
        <van-icon name="after-sale" class="pending" />
        <div>以完成</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.vip {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle {
  width: 100%;
  height: 300px;
  background-color: #e30c7b;
}
.icon {
  width: 100%;
  display: flex;
}
.pending {
  font-size: 35px;
}
.icon-one{
  flex: 1;
}
.icon-two{
  flex: 1;
}
.icon-three{
  flex: 1;
}
.icon-four{
  flex: 1;
}
.icon-fife{
  flex: 1;
}
</style>