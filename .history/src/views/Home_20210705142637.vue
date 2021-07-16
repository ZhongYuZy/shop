<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from '../components/headder/Header'
import Carousel from '../'
export default {
  name: "",
  props: {},
  data() {
    return {
     
    };
  },
  components: {
   Header
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>

</style>