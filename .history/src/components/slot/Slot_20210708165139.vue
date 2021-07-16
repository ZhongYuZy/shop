<template>
  <div>
    <div class="app">
      <div class="location" @click="Location">
        <van-icon name="arrow-down" />
      </div>
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
.location {
  display: flex;
  justify-content: center;
  width: 105px;
  margin: 15px 0 0 0;
}
</style>