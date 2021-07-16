<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="sop">购物车</div>
          </div>
      </template>
    </Top>
    <div></div>
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
  methods: {
    getCard(){
      this.$api.getCard().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log('请求失败' ,err);
      })
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  width: 360px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>