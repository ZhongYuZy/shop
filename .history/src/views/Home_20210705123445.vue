<template>
  <div>
    <
    <router-view />
  </div>
</template>

<script>
import homeLeft from '../components/homeLeft/homeLeft'
export default {
  name: "",
  props: {},
  data() {
    return {
       active: 0,
    };
  },
  components: {
    homeLeft
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>

</style>