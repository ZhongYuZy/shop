<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in list" :key="item">
        <img :src="item" class="img" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      arr:{

            required:true,
        }
  },
  data() {
    return {
        
    };
  },
  components: {},
  methods: {},
  mounted() {
      
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>

.img{
    width: 100%;
    height: 200px;
}
</style>