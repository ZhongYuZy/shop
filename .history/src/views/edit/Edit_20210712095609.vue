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
      list:[]
    };
  },
  components: {},
  methods: {
    onSave(item) {
      console.log(item);
      this.list=item
    },
    onDelete() {
      Toast("delete");
    },
    postAddress(){
      this.$api.postAddress({
        name:list.name,
        tel:list
        address,
        isDefault,
        province,
        city,
        county,
        addressDetail,
        areaCode,
        id
      })
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>