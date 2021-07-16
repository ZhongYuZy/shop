<template>
  <div>
    <div v-for="(item, index) in arr2" :key="index">
      </div></div>
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
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>