<template>
  <div id="app">
    <div class="floor1">
      <div class="floor">
        <slot name="floor"></slot>
        <div class="leisure">{{ list1 }}</div>
      </div>
      <div class="Fruits" v-for="(item , index) in floor1" :key='index'>
        <div class="floor1-left">
         <img src="">
         <img src="" alt="">
        </div>
        <div class="floor1-right">
          
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
</style>