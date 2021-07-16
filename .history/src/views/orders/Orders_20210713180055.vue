<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">全部订单</div>
        </div>
      </template>
    </Top>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      
    };
  },
  components: {},
  methods: {
    // 返回上一级
    onclick() {
      this.$router.back();
    },
  },
  mounted() {
    this.obj = JSON.parse(this.$route.query.obj);
    console.log(this.obj);
    // this.obj1=JSON.parse(localStorage.getItem('goodsOne'))
    // 查询默认地址
    this.$api
      .getDefaultAddress()
      .then((res) => {
        console.log(res);
        if (res.defaultAdd) {
          this.list = res.defaultAdd;
        } else {
          this.getAddress();
        }
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
  },
  computed: {
    price() {
      let num = 0;
      this.obj.map((item) => {
        num += item.count * item.present_price;
      });
      return num;
    },
  },
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
.box1 {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
}
.box2 {
  width: 80%;
  height: 150px;
}
.goods {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.address {
  position: relative;
  margin-top: 15px;
  display: flex;
}
.location {
  font-size: 25px;
  margin-right: 8px;
}
.shou {
  font-size: 15px;
  display: flex;
  align-items: center;
}
.arrow {
  font-size: 20px;
  position: absolute;
  right: -15px;
}
#img {
  margin-left: 15px;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
}
.img {
  width: 90px;
  height: 90px;
}
.like {
  display: flex;
}
.jia {
  display: flex;
  justify-content: space-between;
}
.name {
  color: red;
  font-size: 13px;
  margin-top: 13px;
  margin-left: 7px;
}
.price {
  color: red;
  margin-top: 10px;
  margin-left: 7px;
}
.count {
  margin-top: 10px;
}
.tu {
  width: 100%;
}
.two {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  font-size: 17px;
}
.two-one {
  margin-left: 10px;
  margin-top: 5px;
  font-size: 18px;
}
</style>