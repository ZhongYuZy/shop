<template>
  <div>
    <div class="classification">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: 0,
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.classification {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 18px;
}
</style>