<template>
  <div id="app">
    <div class="floor1">
      <div class="Fruits">休闲食品</div>
    </div>
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