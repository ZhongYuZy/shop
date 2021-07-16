<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
            </div>
          <div class="order">最近浏览</div>
        </div>
      </template>
    </Top>
    <div v-for="(item , index) in list" :key="index">
      <div id="img">
        <img :src="item.image_path" class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      list:[]
    }
  },
  components: {},
  methods: {
      onclick(){
      this.$router.back()
    }
  },
  mounted() {
     this.list=this.$utils.getHistory({
        key:'goodsOne',
    })
    console.log(this.list);
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet{
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
.order{
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
.img{
  width: 90px;
  height: 90px;
}
</style>