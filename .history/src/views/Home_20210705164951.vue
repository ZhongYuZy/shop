<template>
  <div id="app">
    <Header></Header>
    <Carousel :list='list'></Carousel>
    <Middle v-if="arr.length!==0" :arr='arr' :obj='obj'></Middle>
    <Tail></Tail>
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
import Middle from '../components/middle/Middle'
import Tail from '../components/tail/Tail'
export default {
  name: "",
  props: {},
  data() {
    return {
     list:[],
     arr:[],
     obj:[]
    };
  },
  components: {
   Header,
   Carousel,
   Middle,
   Tail
  },
  methods: {
    recommend(){
      this.$api.recommend().then((res) => {
        console.log(res);
      res.data.slides.map((item) => {
        this.list.push(item.image)
      })
      this.arr= res.data.category

    let a=res.data.advertesPicture
        this.obj=Object.values(a)   
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