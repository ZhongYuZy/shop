<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  name: "",
  props: {},
  data() {
    return {
      areaList:areaList,
      searchResult: [],
    };
  },
  components: {},
  methods: {
    onSave(item) {
      console.log(item);
    },
    onDelete() {
      Toast("delete");
    },
    postAddress
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>