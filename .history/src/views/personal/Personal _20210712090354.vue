<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">个人资料</div>
        </div>
      </template>
    </Top>
    <div class="githunt">githunt</div>
    <div class="portrait">
      <div class="header">头像</div>
      <div class="img">
        <div>
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div><van-icon name="arrow" class="arrow" /></div>
      </div>
    </div>
    <div class="username">
      <van-cell-group>
        <van-field
          v-model="value"
          label="用户名"
          placeholder="g-d2+c54aaaalb88"
        />
      </van-cell-group>
    </div>
    <div class="name">
      <van-cell-group>
        <van-field v-model="name" label="昵称" />
      </van-cell-group>
    </div>
    <div class="Gender">
      <van-cell-group>
        <van-field v-model="Gender" label="性别" placeholder="男" />
      </van-cell-group>
    </div>
    <div class="emall">
      <van-cell-group>
        <van-field v-model="emall" label="邮箱" placeholder="请输入邮箱" />
      </van-cell-group>
    </div>
    <div class="age">
      <van-cell-group>
        <van-field
          v-model="age"
          label="出生年月"
          placeholder="22019年4月17日"
        />
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button type="primary" class="preservation" @click="preservation">保存</van-button>
    </div>
    <div class="btn1">
       <van-button type="default" class="cancel">取消</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value: "",
      name: "xiaoai",
      age: "2019年4月17日",
      emall: "",
      Gender: "男",
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
    preservation(){
      localStorage.setItem
    }
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
.githunt {
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.portrait {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  display: flex;
}
.arrow {
  font-size: 17px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  margin-left: 16px;
}
.preservation {
  width: 80%;
}
.cancel {
  width: 80%;
}
.btn{
  display: flex;
  justify-content: center;
  margin: 40px 0 15px 0;
}
.btn1{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>