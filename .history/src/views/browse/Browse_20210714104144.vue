<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">最近浏览</div>
        </div>
      </template>
    </Top>
    <div v-for="(item, index) in list" :key="index">
      <div class="xiang">
        <div id="img">
          <img :src="item.image_path" class="img" />
        </div>
        <div>
          <div class="name">{{item.name}}</div>
          <div class="pri">
            <div class="price">￥{{item.present_price}}</div>
            <div class="orl">{{item.orl_price}}</div>
          </div>
        </div>
        <div class="close">
          <van-icon name="close"  class="icon" @click="icon"/>
        </div>
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
      list: [],
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
    icon(item){
      this.list.splice(item , 1)
      
    }
  },
  mounted() {
    this.list = this.$utils.getHistory({
      key: "goodsOne",
    });
    console.log(this.list);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: gray;
  font-size: 16px;
  margin-top: 5px;
}
.order {
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
#img {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
}
.img {
  width: 90px;
  height: 90px;
}
.xiang{
  width: 100%;
  height: 110px;
  display: flex;
  padding: 5px 0;
  position: relative;
}
.pri{
  display: flex;
}
.price{
  color: red;
  margin-right: 10px;
  margin-left: 10px;
}
.name{
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.orl{
  margin-top: 2.5px;
  text-decoration: line-through;
}

.icon{
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 16px;
}
</style>