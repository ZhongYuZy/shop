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
    <div v-if="list=0"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      list:[],
      show:false,
    }
  },
  components: {},
  methods: {
    getCard(){
      this.$api.getCard().then((res) => {
        console.log(res);
        this.list=res.shopList
      }).catch((err) => {
        console.log('请求失败' ,err);
      })
    }
  },
  mounted() {
    this.getCard()
    if(!localStorage.getItem('nickname')){
      show=true
    }
  },
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