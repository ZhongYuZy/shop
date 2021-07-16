<template>
  <div id="app">
    <div class="floor1">
      <div class="floor">
        <slot name="floor" class="fillet"></slot>
        <div>{{ list1 }}</div>
      </div>
      <div class="Fruits"></div>
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
    list1: {
      type: String,
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
    console.log(this.list1);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  width: 100%;
}
.floor1 {
  width: 100%;
  height: 400px;
  background-color: skyblue;
}
.floor{
  display: flex;
  justify-content: center;
}
.fillet{
  border-radius: 100%;
  background-color: red;
  c
}
</style>