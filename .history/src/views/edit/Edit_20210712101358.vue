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
      // console.log(item);
      this.list=item
      this.postAddress()
    },
    onDelete() {
      Toast("delete");
    },
    postAddress(){
      this.$api.postAddress({
        name:this.list.name,
        tel:this.list.tel,
        address:`${this.list.province}${this.list.province}${this.list.county}${this.list.addressDetail}`,
        isDefault:this.list.isDefault,
        province:this.list.province,
        city:this.list.city,
        county:list.county,
        addressDetail:list.addressDetail,
        areaCode:list.areaCode,
        id,
      }).then((res) => {
        console.log(res);
        console.log(address);
      }).catch((err) => {
        console.log('请求失败' , err);
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