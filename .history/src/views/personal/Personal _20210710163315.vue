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
      <div>头像</div>
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
     <div>用户名</div>
     <div>昵称</div>
     <div>性别</div>
     div
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    onclick() {
      this.$router.back();
    },
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
.githunt{
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
</style>