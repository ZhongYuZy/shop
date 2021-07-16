<template>
  <div class="recommand-wrap">
    <div class="recommend">商品推荐</div>
    <div ref="wrapper">
      <!-- /* 这里是父盒子*/ -->
      <ul class="cont" ref="cont">
        <!-- /* 这里是子盒子，即滚动区域*/ -->
        <li class="cont-item" v-for="(item , index) in recommendList" :key="index">
          <div class="cont-img">
            <img class="img" :src="item.image" />
          </div>
          <div>{{item.goodsName}}</div>
          <div class="cont-dest">{{ item.mallPrice}}</div>
          <div class="cont-price">
            <span class="price">￥{{ item.price}}</span>
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
  props:{
       recommendList: {
      type: Array,
      required: true
    }
  },
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
.img{
    width: 60px;
    height: 40px;
}
</style>