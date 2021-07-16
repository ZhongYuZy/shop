<template>
  <div>
    <homeLeft></homeLeft>
    <homeRight></homeRight>
    <router-view />
  </div>
</template>

<script>
import homeLeft from '../components/homeLeft/homeLeft'
import homeRight from '../components/homeright/homeRight'
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

</style>