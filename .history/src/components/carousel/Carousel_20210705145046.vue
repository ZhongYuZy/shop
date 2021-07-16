<template>
  <div>
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                  <van-swipe-item v-for="item in list" :key="item">
                        <img :src="item" alt />             </van-swipe-item
      >
              </van-swipe
    >
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      list: {
        required: true,
      },
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
</style>