<template>
  <div class="recommand-wrap">
    <div class="title">
      <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title-hotrec">本周热门榜单</span>
      <span class="title-allrec">全部榜单</span>
    </div>
    <div ref="wrapper">  /* 这里是父盒子*/
      <ul class="cont" ref="cont">  /* 这里是子盒子，即滚动区域*/
        <li class="cont-item" v-for="item of recommendList" :key="item.id">
          <div class="cont-img">
            <img class="img" :src="item.url" :alt="item.text">
          </div>
          <div class="cont-dest">{{item.text}}</div>
          <div class="cont-price">
            <span class="price">￥{{item.price}}</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
————————————————
版权声明：本文为CSDN博主「470368525」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45217584/article/details/104774153

<script>
import Bscroll from 'better-scroll'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
} <div class="recommend">商品推荐</div>
</script>

<style lang='scss' scoped>
.one{
    width: 100%;
    height: 270px;
    background-color: skyblue;
}
.recommend{
 padding: 10px 0 5px 10px;
}
</style>