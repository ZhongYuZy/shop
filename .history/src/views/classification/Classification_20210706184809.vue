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
          <van-tab  v-for="(item, index) in obj"
          :key="index" :title="item.bxMallSubDto.mallSubName"></van-tab>
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
      //二级分类
      obj1:[],
      //一级分类id  首页传过来的
      id:''
    };
  },
  components: {},
  methods: {

  },
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("arr"));
    console.log(this.obj);
    this.id = this.$route.query.id
    this.obj1 =  this.obj.filter(item=>{
      return item.mallCategoryId = this.id
    })
    console.log(this.obj1);
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
  border: 1px solid #f7f7f7;
  position: absolute;
  top: 45px;
  bottom: 0;
  background-color: #f1f8ff;
}
.label {
  margin: 0;
  padding: 0;
  width: 80vw;
  position: absolute;
  right: 0;
  top: 50px;
}

</style>