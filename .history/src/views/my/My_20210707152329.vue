<template>
  <div>
    <div class="vip">会员中心</div>
    <div class="middle">
      <div class="setting">
        <van-icon name="setting" class="setting1" />
      </div>
    </div>
    <div class="icon">
      <div class="icon-one">
        <van-icon name="pending-payment" class="pending" />
        <div class="words">待付款</div>
      </div>
      <div class="icon-two">
        <van-icon name="tosend" class="pending" />
        <div class="words">待发货</div>
      </div>
      <div class="icon-three">
        <van-icon name="logistics" class="pending" />
        <div class="words">待收货</div>
      </div>
      <div class="icon-four">
        <van-icon name="orders-o" class="pending" />
        <div class="words">待评价</div>
      </div>
      <div class="icon-fife">
        <van-icon name="points" class="pending" />
        <div class="words">已完成</div>
      </div>
    </div>
    <div class="records">
      <van-cell title="全部订单" icon="records">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>
    <div>
      <van-cell title="收藏商品" icon="points">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>
     <div>
      <van-cell title="地址管理" icon="gold-coin-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>
     <div>
      <van-cell title="最近浏览" icon="gift-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.vip {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle {
  width: 100%;
  height: 200px;
  background-color: #e30c7b;
}
.icon {
  width: 100%;
  display: flex;
}
.pending {
  font-size: 30px;
}
.words {
  font-size: 13px;
}
.icon-one {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.icon-two {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.icon-three {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.icon-four {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.icon-fife {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 18px;
  line-height: inherit;
  color: #cebdb7;
}
.records {
  margin-top: 15px;
}
.setting{
  width: 100%;
  font-size: 20px;
  color: #fff;
}
.setting1{
  position: absolute;
  right: 15px;
  top: 20px;
}
</style>