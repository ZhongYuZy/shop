<template>
  <div>
    <div class="box">
      <div class="tail">
        <!-- <div>
          <van-icon name="wap-home-o" size="40" />
          <div>商城</div>
        </div>
        <div>
          <van-icon name="wap-nav" size="40" />
          <div>分类</div>
        </div>
        <div>
          <van-icon name="shopping-cart" size="40" dot />
          <div>购物车</div>
        </div>
        <div>
          <van-icon
            name="manager-o" size="40" />
          <div>我的</div>
        </div> -->
        <van-tabbar
          v-model="active"
          active-color="#ee0a24"
          inactive-color="#000"
        >
          <van-tabbar-item icon="wap-home-o" size="40" >商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav"  size="40">分类</van-tabbar-item>
          <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
          <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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