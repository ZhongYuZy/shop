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
    <div class="box1"></div>
  </div>
</template>

<script>

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
   
  },
  methods: {
    onclick(){
      this.$router.back()
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet{
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
.order{
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
.box1{
  width: 100%;
  height: 100px;
  background-color: skybue;
}
</style>