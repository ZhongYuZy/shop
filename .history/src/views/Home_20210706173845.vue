<template>
  <div id="app">
    <Header></Header>
    <Carousel :list='list'></Carousel>
    <Middle v-if="arr.length!==0" :arr='arr' :obj='obj'></Middle>
    <Tail :recommendList='recommendList'></Tail>
    <Floor v-if="floor1" :floor1='floor1' :list1='list1'>
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">1F</div>
      </template>
    </Floor>
    <Floor v-if="floor1" :floor1='floor2' :list1='list2'>
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">2F</div>
      </template>
    </Floor>
    <Floor v-if="floor1" :floor1='floor3' :list1='list3'>
      <template #floor>
        <div class="floor displayF justify-center align-itemsC">3F</div>
      </template>
    </Floor>
    <Sale v-if="floor4" :floor4='floor4'></Sale>
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
import Middle from '../components/middle/Middle'
import Tail from '../components/tail/Tail'
import Floor from '../components/floor/Floor'
import Sale from '../components/sale/Sale'
export default {
  name: "",
  props: {},
  data() {
    return {
     list:[],
     arr:[],
     obj:[],
     recommendList:[],
     floor1:null,
     list1:[],
      floor2:null,
     list2:[],
      floor3:null,
     list3:[],
     floor4:null,
     ar
    };
  },
  components: {
   Header,
   Carousel,
   Middle,
   Tail,
   Floor,
   Sale
  },
  methods: {
    recommend(){
      this.$api.recommend().then((res) => {
        console.log(res);
        this.list=res.data.slides
    //  console.log(this.list);
      // 分类详情获取
      this.arr= res.data.category
    // 内测详情获取
    let a=res.data.advertesPicture
        this.obj=Object.values(a)   
      // 商品推荐获取
        this.recommendList=res.data.recommend

        // 楼层数据获取
        this.floor1=res.data.floor1
        this.list1=res.data.floorName.floor1
        // 二楼
         this.floor2=res.data.floor2
        this.list2=res.data.floorName.floor2

        // 三楼
         this.floor3=res.data.floor3
        this.list3=res.data.floorName.floor3

        // 热销
        this.floor4=res.data.hotGoods
      }).catch((err) => {
        console.log('请求失败' ,err);
      })
    }
  },
  mounted() {
    this.recommend()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.floor{
  width: 30px;
  height: 20px;
  border-radius: 100%;
  background-color: red;
  color: #fff;
}
</style>