<template>
  <div>
    <div class="box">
      <div class="tail">
        <van-tabbar
          v-model="active"
          active-color="#ee0a24"
          inactive-color="#000"
        >
          <van-tabbar-item icon="wap-home-o" size="40" @click="Mall">商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav"  size="40">分类</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
       active: 0,
    };
  },
  components: {},
  methods: {
       Mall()
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
}
.tail {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
}
</style>