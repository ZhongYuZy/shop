<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">新增地址</div>
        </div>
      </template>
    </Top>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        :show-delete='show'
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  name: "",
  props: {},
  data() {
    return {
      areaList: areaList,
      searchResult: [],
      list: [],
      show:null,
      obj:[],
    };
  },
  components: {

  },
  methods: {
      onclick() {
      this.$router.back();
      localStorage.removeItem('a')
    },
    onSave(item) {
      // console.log(item);
      this.list = item;
      this.postAddress();
       this.$toast('添加成功');
      this.$router.back()
    },
    onDelete() {
      
    },
    postAddress() {
      this.$api
        .postAddress({
          name: this.list.name,
          tel: this.list.tel,
          address: `${this.list.province}${this.list.province}${this.list.county}${this.list.addressDetail}`,
          isDefault: this.list.isDefault,
          province: this.list.province,
          city: this.list.city,
          county: this.list.county,
          addressDetail: this.list.addressDetail,
          areaCode: this.list.areaCode,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
   this.show=Boolean(Number(localStorage.getItem('a')))
   this.obj=this.$route.query.obj
   console.log(this.obj);
  },
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