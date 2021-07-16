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
      list:{
            required:true,
        }
  },
  data() {
    return {
        
    };
  },
  components: {},
  methods: {
     verScroll () {
      let width = this.recommendList.length * 110// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + 'px'  // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() //如果dom结构发生改变调用该方法
        }
      })
    }
————————————————
版权声明：本文为CSDN博主「470368525」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45217584/article/details/104774153
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