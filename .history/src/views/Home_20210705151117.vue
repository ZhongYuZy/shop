<template>
  <div id="app">
    <Header></Header>
    <Carousel :list='list'></Carousel>

  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
import Middle
export default {
  name: "",
  props: {},
  data() {
    return {
     list:[]
    };
  },
  components: {
   Header,
   Carousel
  },
  methods: {
    recommend(){
      this.$api.recommend().then((res) => {
        console.log(res);
      res.data.slides.map((item) => {
        this.list.push(item.image)
      })
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