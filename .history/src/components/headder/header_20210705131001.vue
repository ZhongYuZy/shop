<template>
  <div>
    <div class="app">
      <div class="location">
        <van-icon name="arrow-down" />
      </div>
      <div >
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
  height: 35px;
  display: flex;
  background-color: #f2f2f2;
}.location{
  width: 80px;
  margin: 7px 0 ;
}
.btn{
  height: 35px;
  background-color: #f2f2f2;
}
</style>