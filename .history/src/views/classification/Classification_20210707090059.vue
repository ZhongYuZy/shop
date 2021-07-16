<template>
  <div>
    <div class="classification">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey" class="sidebar">
        <van-sidebar-item
          v-for="(item, index) in obj"
          :key="index"
          :title="item.mallCategoryName"
          @click="onclick(index)"
        />
      </van-sidebar>
      <div class="label">
        <van-tabs v-model="active" @click="onlike">
          <van-tab
            v-for="(item, index) in obj1"
            :key="index"
            :title="item.mallSubName"
            ><div v-for="(item, index) in arr" :key="index">
              <div class="box">
                <img :src="item.image" class="img">
                <div>
                  <div>{{item.name}}</div>
                  <div class="box1">
                    <div class="">{{item.present_price}}</div>
                    <div>{{item.orl_price}}</div>
                  </div>
                </div>
                </div>
              </div
          ></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: 0,
      obj: [],
      active: 3,
      //二级分类
      obj1: [],
      //一级分类id  首页传过来的
      id: "",
      list: null,
      arr:'',
    };
  },
  components: {},
  methods: {
    onclick(item) {
      this.obj1 = this.obj[item].bxMallSubDto;
      console.log(this.obj1);
    },
    onlike(index) {
      this.list = this.obj1[index].mallSubId;
      this.$api
        .category(this.list)
        .then((res) => {
          console.log(res);
          this.arr=res.dataList
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("arr"));
    console.log(this.obj);
    this.id = this.$route.query.id;
    this.obj.map((item) => {
      if (item.mallCategoryId === this.id) {
        this.obj1 = item.bxMallSubDto;
        return;
      }
    });
    this.obj1 = this.obj[0].bxMallSubDto;
    console.log(this.obj1);
    //  this.category()
    this.list = this.obj1.mallSubId;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.classification {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px 0 5px 0;
  font-size: 18px;
}
.sidebar {
  border: 1px solid #f7f7f7;
  position: absolute;
  top: 45px;
  bottom: 0;
  background-color: #f1f8ff;
}
.label {
  margin: 0;
  padding: 0;
  width: 80vw;
  position: absolute;
  right: 0;
  top: 50px;
}
.img{
  width: 100px;
  border: 1px solid #f7f7f7;
}
.box{
  display: flex;
}
.box1{
  display: flex;
}
</style>