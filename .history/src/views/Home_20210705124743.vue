<template>
  <div id="app">
    <homeLeft></homeLeft>
    <homeRight></homeRight>
    <router-view />
  </div>
</template>

<script>
import header from '../components/homeLeft/homeLeft'
export default {
  name: "",
  props: {},
  data() {
    return {
     
    };
  },
  components: {
    homeLeft,
    homeRight
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.app{
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
}
</style>