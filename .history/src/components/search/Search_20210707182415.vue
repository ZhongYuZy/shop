<template>
  <div>
    <div v-for="(item, index) in arr2" :key="index">
      <div
        class="box"
        v-html="
          item.name.replace(arr3, `    <span  style='color:#eb3323'>123</span>`)
        "
      >
      </div>
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
    arr3: {
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
    console.log(this.arr2);
    console.log(this.arr3);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  margin: 20px 0;
  padding: 10px 0;
  font-size: 16px;
}
</style>