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
    <div class="box1">
      <div v-if="list.length===0">
        <div></div>
        <div>还没有地址前往设置</div>
      
      </div>
      <div v-else class="box2">
        <div class="goods">
          <div>收货人:{{list.name}}</div>
          <div>{{list.tel}}</div>
        </div>
        <div class="address">
          <van-icon name="location-o" class="location" />
          <div class="shou">收货地址:{{list.address}}</div>
          <van-icon name="arrow" class="arrow" @click="click1" />
        </div>
      </div>
    </div>
    <div>
      <img src="../../assets/caitiao.jpg" class="tu" />
    </div>
    <div v-for="(item, index) in obj" :key="index">
      <div class="like">
        <div id="img">
          <img :src="item.image_path" class="img" />
        </div>
        <div>
          <div class="name">{{ item.name }}</div>
          <div class="jia">
            <div class="price">￥{{ item.mallPrice }}</div>
            <div class="count">X{{ item.count }}</div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="price * 100" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: [],
      list:[],
    };
  },
  components: {},
  methods: {
    click1(){
      this.$router.push('/Address')
    },
    onclick() {
      this.$router.back();
    },
    getAddress(){
       // 查询地址
     this.$api.getAddress().then((res) => {
      console.log(res);
      if(res.defaultAdd.length!==0){
        this.list=res.defaultAdd[0]
      }else{
        this.list=[]
      }
    }).catch((err) => {
      console.log('请求失败' , err);
    })
    }
  },
  mounted() {
    this.obj = JSON.parse(this.$route.query.obj);
    console.log(this.obj);

    // 查询默认地址
    this.$api.getDefaultAddress().then((res) => {
      console.log(res);
      if(res.defaultAdd){
        this.list=res.defaultAdd
      }else{
        this.getAddress()
      }
    }).catch((err) => {
      console.log('请求失败' , err);
    })
   
  },
  computed: {
    price() {
      let num = 0;
      this.obj.map((item) => {
        num += item.count * item.mallPrice;
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
</style>