<template>
  <div id="box">
    <div class="box">
      <div class="Sign">登陆/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#box{
  width: 100%;
  height: 667px;
  background-image: url('../../assets/login.jpg');
}
.box{
  width: 350px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  bottom: 35px;
}
.Sign{
  font-size: 25px;
  padding: 0 0 0 10px;
}
</style>