<template>
  <div class="recommand-wrap">
    <div class="recommend">商品推荐</div>
    <div ref="wrapper">
      /* 这里是父盒子*/
      <ul class="cont" ref="cont">
        /* 这里是子盒子，即滚动区域*/
        <li class="cont-item" v-for="item of recommendList" :key="item.id">
          <div class="cont-img">
            <img class="img" :src="item.url" :alt="item.text" />
          </div>
          <div class="cont-dest">{{ item.text }}</div>
          <div class="cont-price">
            <span class="price">￥{{ item.price }}</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

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
} 
</script>

<style lang='scss' scoped>
.one {
  width: 100%;
  height: 270px;
  background-color: skyblue;
}
.recommend {
  padding: 10px 0 5px 10px;
}
</style>