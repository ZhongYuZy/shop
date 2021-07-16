<template>
  <div>
    <div class="app">
      <div class=""><slot></slot></div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
.app {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #f2f2f2;
}

</style>