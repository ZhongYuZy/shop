<template>
  <div id="app">
    <Header></Header>
    <Carousel>list</Carousel>
    <router-view />
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../components/carousel/Carousel'
export default {
  name: "",
  props: {},
  data() {
    return {
     
    };
  },
  components: {
   Header,
   Carousel
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>

</style>