<template>
  <div>
    <div class="app">
      <div class="location">
        <van-icon name="arrow-down" />
      </div>
      <div class="ipt">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <van-button type="default" class="btn">搜索</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value:'',
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
.app {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #f2f2f2;
}.location{
  width: 105px;
  margin: 10px 0 ;
}
.ipt{
  height: 40px;
  .van-search{
    
    height: 30px;
    padding: 0 0 ;
  }
}
.btn{
  padding: 5px 0 0 15px;
  height: 35px;
  background-color: #f2f2f2;
}
</style>