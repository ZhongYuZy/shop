<template>
  <div id="box">
    <div class="box">
      <div class="Sign">登陆/注册</div>
      <van-form @submit="onSubmit">
        <div class="username">
          <van-field
            v-model="nickname"
            name="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </div>
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="Verification">
          <van-cell-group>
            <van-field
              v-model="username"
              name="验证码"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
          </van-cell-group>
          <div v-html="arr" @click="onclick"></div>
        </div>
      </van-form>
      <div class="Button">
        <van-button type="primary" class="login">登录</van-button>
        <van-button type="danger" class="register">注册</van-button>
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
      nickname: "",
      password: "",
      verify: "",
      arr: "",
    };
  },
  components: {},
  methods: {
    onclick() {
      this.$api
        .verify()
        .then((res) => {
          this.arr = res;
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.$api
      .verify()
      .then((res) => {
        this.arr = res;
        console.log(res);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
  },
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
  height: 350px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  bottom: 130px;
}
.Sign {
  font-size: 25px;
  padding: 10px 0 0 10px;
}
.username {
  margin: 20px 0;
}
.password {
  margin: 20px 0 0 0;
}
.Verification {
  display: flex;
  width: 320px;
  margin: 15px 0;
}
.Button {
  display: flex;
  margin: 20px 0;
}
.login {
  width: 100px;
  margin: 0 10px 0 20px;
}
.register {
  width: 100px;
  margin: 0 0 0 10px;
}
</style>