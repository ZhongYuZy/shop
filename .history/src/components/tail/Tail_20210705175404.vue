<template>
  <div class="recommand-wrap">
    <div class="recommend">商品推荐</div>
    <div ref="wrapper" class="">
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
  mounted() {
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);
          this.verScroll();
        }
      }, 0);
    });
  },
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
 flex: 1;
}
.cont-pr {
  margin: 5px 0;
  display: flex;
}
.cont-dest {
  margin: 3px 0 0 0;
}
.name {
  width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>