<template>
  <div >
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in list" :key="item">
        <img :src="item" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      list:{
            required:true,
        }
  },
  data() {
    return {
        
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