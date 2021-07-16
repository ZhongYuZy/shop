<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
       active: 0,
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
}
.tail {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
}
</style>