<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet">
            <van-icon name="arrow-left" />
            </div>
          <div class="order">全部订单</div>
        </div>
      </template>
    </Top>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Top,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet
</style>