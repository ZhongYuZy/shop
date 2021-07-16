<template>
  <div>
    <div v-for="(item, index) in arr2" :key="index">
      <div></div>
      {{item.name}}
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
</style>