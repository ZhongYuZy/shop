<template>
  <div>
    <Slot>
      <template #top>
        <div class="box">
          <div>
            <van-icon name="arrow-left" />
            </div>
          <div class="order">全部订单</div>
        </div>
      </template>
    </Slot>
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
    Slot,
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