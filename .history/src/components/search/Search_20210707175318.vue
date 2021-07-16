<template>
  <div>
    <div v-for="(item, index) in arr2" :key="index">
      <div class="box"> {{item.name}}</div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arr2: {
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
    console.log(this.arr2);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box{
  width: 100%;
  margin: 10px 0;
  height: 40px;
  font-size: ;
}
</style>