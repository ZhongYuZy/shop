<template>
  <div id="box">
    <div class="box">
      <div class="Sign">登陆/注册</div>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名"  class="username"/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入密码" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
       value: '',
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#box {
  width: 100%;
  height: 667px;
  background-image: url("../../assets/login.jpg");
}
.box {
  width: 350px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  bottom: 35px;
}
.Sign {
  font-size: 25px;
  padding: 10px 0 0 10px;
}
.username{
  margin: 10px;
}
</style>