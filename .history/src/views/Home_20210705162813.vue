<template>
  <div id="app">
    <Header></Header>
    <Carousel :list='list'></Carousel>
    <Middle v-if="arr.length!==0" :arr='arr'></Middle>
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
import Middle from '../components/middle/Middle'
export default {
  name: "",
  props: {},
  data() {
    return {
     list:[],
     arr:[],
    };
  },
  components: {
   Header,
   Carousel,
   Middle
  },
  methods: {
    recommend(){
      this.$api.recommend().then((res) => {
        console.log(res);
      res.data.slides.map((item) => {
        this.list.push(item.image)
      })
      this.arr= res.data.category
      this.arr=
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