<template>
  <div class="recommand-wrap">
    <div class="recommend">商品推荐</div>
    <div ref="wrapper">
      <!-- /* 这里是父盒子*/ -->
      <ul class="cont" ref="cont">
        <!-- /* 这里是子盒子，即滚动区域*/ -->
        <li
          class="cont-item"
          v-for="(item, index) in recommendList"
          :key="index"
        >
          <div class="cont-img">
            <img class="img" :src="item.image" />
          </div>
          <div class="name">{{ item.goodsName }}</div>
          <div class="cont-pr">
            <div class="cont-dest">{{ item.mallPrice }}</div>
            <div class="cont-price">
              <span class="price">￥{{ item.price }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  props: {
    recommendList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    verScroll() {
      let width = this.recommendList.length * 110; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
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
.img {
  width: 80px;
  height: 100px;
}
.cont {
  display: flex;
}
.cont-pr {
  margin: 5px 0;
  display: flex;
}
.cont-dest {
  margin: 3px 0 0 0;
}
.name {
    width: 100px;
  white-space: nowrap;
  overflow: hidden;
    text-overflow:ellipsis;
}
</style>