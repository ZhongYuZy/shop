<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">收藏商品</div>
        </div>
      </template>
    </Top>
    <div v-for="(item , index) in list" :key="index" class="box">
      <div class="see"><img :src="item.image_path"  class="img"/></div>
      <div>
        <div>{{item.name}}</div>
        <div>{{item.present_price}}</div>
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
  },
  mounted() {
    this.$api
      .getCollection()
      .then((res) => {
        console.log(res);
        this.list = res.data.list;
        // console.log(this.list);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
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
.img{
  width: 80px;
  height: 80px;
}
.box{
  display: flex;
}
.see{
  width: 100px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  margin: 5px 0 ;
}
</style>