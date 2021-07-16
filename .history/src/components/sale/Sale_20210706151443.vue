<template>
  <div class="app">
    <div class="sale">
      <div>热销商品</div>
    </div>
    <div class="box">
      <div v-for="(item, index) in floor4" :key="index" class="commodity" >
        <div class="img">
          <img :src="item.image" class="img1" />
          <div class="name">{{item.name}}</div>
          <div class="Price">
          <div>￥{{item.mallPrice}}</div>
          <div  class="pr">￥{{item.price}}</div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="box1"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor4: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.floor4);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.app {
  width: 100%;
  background-color: #ededed;
}
.sale {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  font-size: 17px;
  color: red;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.commodity {
  width: 50%;
  
}
.img {
  width: 100%;
  background-color: #fff;
}
.img1 {
  width: 100%;
  margin: 5px 0 ;
}
.name{
  margin-left: 30px;
  width: 160px;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Price{
  display: flex;
  justify-content: center;
  margin: 5px 0;
}
.pr{
  color: red;
  text-decoration: line-through;
}
.box1{
  height: 45px;
}
</style>