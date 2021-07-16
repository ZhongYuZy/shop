<template>
  <div>
    <div class="app">
      <div class="location" @click="">
        <div>{{city ? city:'定位中'}}</div>
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
      value: "",
      city:'',
    };
  },
  components: {},
  methods: {
    getData() {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB",
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          // console.log(data);
          _this.city=data.addressComponent.city
          // console.log(_this.city);
          _this.$store.commit('setCity',  _this.city)
          localStorage.setItem('city', _this.city)
        }

        function onError(data) {
          // 定位出错
        }
      });
    },
  },
  mounted() {
    this.getData()
  },
  computed: {
    data(){
      return this.$store.state.city
    }
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.app {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #f2f2f2;
}
.location {
  display: flex;
  justify-content: center;
  width: 105px;
  margin: 15px 0 0 0;
}
.ipt {
  padding: 10px 0;
  display: flex;
  height: 40px;
  .van-search {
    height: 25px;
    padding: 0 0;
    .van-search__content {
      height: 30px;
    }
  }
}
.btn {
  padding: 12px 0 0 15px;
  height: 35px;
  background-color: #f2f2f2;
}
</style>