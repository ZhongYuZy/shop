<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in list" :key="item"  @click="click(item)">
        <img :src="item.image" class="img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      list:{
          type:a
            required:true,
        }
  },
  data() {
    return {
        
    };
  },
  components: {},
  methods: {
     click(item){
       console.log(item);
      this.$router.push({
        path:'/Details',
        query:{id:item.goodsId}
      })
      console.log(item);
    }
  },
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