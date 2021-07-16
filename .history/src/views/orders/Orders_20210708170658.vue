<template>
  <div>
    <SloTopt>
      <template #top>
        <div class="box">
          <div>
            <van-icon name="arrow-left" />
            </div>
          <div class="order">全部订单</div>
        </div>
      </template>
    </SloTopt>
  </div>
</template>

<script>
import Top from "../../components/slot/Slot";
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
</style>