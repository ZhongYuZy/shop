<template>
  <div>
    <div class="box">
      <div class="tail">
        <router-view />
        <van-tabbar route>
          <van-tabbar-item replace to="/home" icon="wap-home-o"
            >商城</van-tabbar-item
          >
          <van-tabbar-item replace to="/Classification" icon="wap-nav"
            >分类</van-tabbar-item
          >
           <van-tabbar-item replace to="/Shopping" icon="shopping-cart"
            >购物车</van-tabbar-item
          >
           <van-tabbar-item replace to="/My" icon="manager-o"
            >我的</van-tabbar-item
          >
        </van-tabbar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import
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
    Mall() {
      this.$router.push("/");
    },
    classification() {
      this.$router.push("/Classification");
    },
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