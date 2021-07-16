<template>
  <div id="app">
    <div class="box"> 
      <Header> </Header>
      <div class="ipt">
        <van-search v-model="value" placeholder="请输入搜索关键词"  @focus="focus"/>
      </div>
      <van-button type="default" class="btn">
        搜索</van-button>
    </div>
  <div v-if="show===true">
    <Carousel :list="list"></Carousel>
    <Middle v-if="arr.length !== 0" :arr="arr" :obj="obj"></Middle>
    <Tail :recommendList="recommendList"></Tail>
    <Floor v-if="floor1" :floor1="floor1" :list1="list1">
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">1F</div>
      </template>
    </Floor>

    <Floor v-if="floor1" :floor1="floor2" :list1="list2">
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">2F</div>
      </template>
    </Floor>
    <Floor v-if="floor1" :floor1="floor3" :list1="list3">
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">3F</div>
      </template>
    </Floor>
    <Sale v-if="floor4" :floor4="floor4"></Sale>
  </div>
    <div v-if="show===false">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import Header from "../components/headder/Header";
import Carousel from "../components/carousel/Carousel";
import Middle from "../components/middle/Middle";
import Tail from "../components/tail/Tail";
import Floor from "../components/floor/Floor";
import Sale from "../components/sale/Sale";
import Search from '../components/search/Search'
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      arr: [],
      obj: [],
      recommendList: [],
      floor1: null,
      list1: [],
      floor2: null,
      list2: [],
      floor3: null,
      list3: [],
      floor4: null,
      arr1: [],
      value: "",
      show:true,
    };
  },
  components: {
    Header,
    Carousel,
    Middle,
    Tail,
    Floor,
    Sale,
    Search
  },
  methods: {
    focus() {
      this.show = false;
    },
    recommend() {
      this.$api
        .recommend()
        .then((res) => {
          console.log(res);
          this.list = res.data.slides;
          //  console.log(this.list);
          // 分类详情获取
          this.arr = res.data.category;
          // 内测详情获取
          let a = res.data.advertesPicture;
          this.obj = Object.values(a);
          // 商品推荐获取
          this.recommendList = res.data.recommend;

          // 楼层数据获取
          this.floor1 = res.data.floor1;
          this.list1 = res.data.floorName.floor1;
          // 二楼
          this.floor2 = res.data.floor2;
          this.list2 = res.data.floorName.floor2;

          // 三楼
          this.floor3 = res.data.floor3;
          this.list3 = res.data.floorName.floor3;

          // 热销
          this.floor4 = res.data.hotGoods;
          // 储蓄数据
          this.arr1 = res.data.category;
          localStorage.setItem("arr", JSON.stringify(res.data.category));
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.recommend();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.floor {
  width: 30px;
  height: 20px;
  border-radius: 100%;
  background-color: red;
  color: #fff;
}
.box{
  display: flex;
}
.ipt {
  width: 200px;
  padding: 10px 0 0 0;
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