<template>
  <div>
    <div class="box">
      <div class="tail">
          <router-view />

<van-tabbar route>
  <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
</van-tabbar>
        <!-- <van-tabbar
          v-model="active"
          active-color="#ee0a24"
          inactive-color="#000"
        >
          <van-tabbar-item icon="wap-home-o" size="40" @click="Mall">商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav"  size="40" @click="classification">分类</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
        </van-tabbar> -->
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
    Mall(){
        this.$router.push('/')
    },
    classification(){
        this.$router.push('/Classification')
    }
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