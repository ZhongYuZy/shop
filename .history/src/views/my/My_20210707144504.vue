<template>
  <div>
    <div class="vip">会员中心</div>
    <div class="middle"></div>
    <div class="icon">
      <div>
        <van-icon name="pending-payment"  class="pending"/>
        <div>待付款</div> 
         </div>
         <div>
        <van-icon name="tosend" class="pending"/>
        <div>待发货</div> 
         </div>
          <div>
        <van-icon name="logistics" class="pending"/>
        <div>待收货</div> 
         </div>
          <div>
       <van-icon name="orders-o" class="pending"/>
        <div>待收货</div> 
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
.pending{
  font-size: 35px;
}
</style>