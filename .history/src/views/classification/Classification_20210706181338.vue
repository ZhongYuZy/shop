<template>
  <div>
    <div class="classification">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey" class="sidebar">
        <van-sidebar-item
          v-for="(item, index) in obj"
          :key="index"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <div class="label">
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
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
      obj: [],
      active: 2,
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("arr"));
    console.log(this.obj);
  },
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
  padding: 10px 0 5px 0;
  font-size: 18px;
}
.sidebar {
  position: absolute;
  top: 45px;
  bottom: 0;
  background-color: #f1f8ff;
}
.label{
  margin: 0;
  padding: 0;
  width: 80vw;
 position: absolute;
 right: 0;
 top
}
</style>