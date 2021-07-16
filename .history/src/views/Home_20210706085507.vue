<template>
  <div id="app">
    <Header></Header>
    <Carousel :list='list'></Carousel>
    <Middle v-if="arr.length!==0" :arr='arr' :obj='obj'></Middle>
    <Tail :recommendList='recommendList'></Tail>
    <Floor v-if="floor1" :floor1='floor1' :list1='list1'></Floor>
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
import Middle from '../components/middle/Middle'
import Tail from '../components/tail/Tail'
import Floor from '../components/floor/Floor'
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
    };
  },
  components: {
   Header,
   Carousel,
   Middle,
   Tail,
   Floor,
  },
  methods: {
    recommend(){
      this.$api.recommend().then((res) => {
        console.log(res);
      res.data.slides.map((item) => {
        this.list.push(item.image)
      })
      // 分类详情获取
      this.arr= res.data.category
    // 内测详情获取
    let a=res.data.advertesPicture
        this.obj=Object.values(a)   
      // 商品推荐获取
        this.recommendList=res.data.recommend

        // 楼层数据获取
        this.floor1=res.data.floor1
        console.log(this.foo);
        this.list1=res.data.floorName.floo1
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

</style>