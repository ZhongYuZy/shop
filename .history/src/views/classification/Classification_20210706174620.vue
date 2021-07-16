<template>
  <div>
    <div class="classification">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey" class="sidebar">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
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
      obj:[],
    };
  },
  components: {},
  methods: {},
  mounted() {
   this.obj=JSON.parse(localStorage.getItem(arr))
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
  padding: 10px 0;
  font-size: 18px;
}
.sidebar{
  position: absolute;
  top: 45px;
  bottom: 0;
  background-color: #f1f8ff;
}
</style>