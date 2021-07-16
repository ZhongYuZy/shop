<template>
  <div id="app">
    <div class="floor1">
      <div class="floor">
        <slot name="floor"></slot>
        <div class="leisure">{{ list1 }}</div>
      </div>
      <div class="Fruits ">
        <div class="floor1-left">
         <img :src='floor1[0].image' class="img">
         <img :src="floor1[3].image" class="img2">
        </div>
        <div class="floor1-right">
          <img :src='floor1[1].image'  class="img1">
          <img :src='floor1[2].image'  class="img1">
          <img :src='floor1[4].image'  class="img1">
        </div>
      </div>
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
    list2: {
      type: String,
      required: true,
    },
    list3: {
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
  padding: 5px 0 0 0;
  margin: 5px 3px 0 0;
  display: flex;
  justify-content: center;
}
.leisure{
 padding: 8px 0 0 0;
}
.Fruits{
  display: flex;
  width: 100%;
}
.img{
  width: 200px;
  height: 200px;
  margin: 0 5px 0 0;
}
.img2{
  width: 200px;
  height:0px;
}
.img1{
  width: 165px;
  height: 110px;
}
</style>