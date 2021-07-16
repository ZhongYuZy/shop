<template>
  <div id="app">
   <home
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.floor1);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  width: 100%;
}
.floor1{
  width: 100%;
  height: 400px;
  background-color: skyblue;
}
</style>