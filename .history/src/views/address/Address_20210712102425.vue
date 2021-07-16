<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">地址列表</div>
        </div>
      </template>
    </Top>
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        disabled-text="还没有默认地址"
        default-tag-text="默认"
        @edit="onEdit"
        @add="onAdd"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
    onAdd() {
      // Toast("新增地址");
      this.$router.push("/Edit");
      localStorage.setItem()
    },
    onEdit(item, index) {
      // Toast("编辑地址:" + index);
    },
    
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: gray;
  font-size: 16px;
  margin-top: 5px;
}
.order {
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
</style>