<template>
  <div>
    <div class="icon">
      <van-icon name="arrow-left" />
    </div>
    <div class="middle">
      <div class="freight">运费：0</div>
      <div class="surplus">剩余：1000</div>
      <div class="Collection">取消收藏<van-icon class="like" name="like-o" /></div>
    </div>
    <div>
      <van-icon name="shop-o" />
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
.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #7f7f7f;
  margin: 10px 5px;
}
.middle{
  width: 100%;
  display: flex;
}
.freight{
  flex: 1;
  margin-left: 10px;
}
.surplus{
  flex: 1;
}
.Collection{
  margin-left: 25px;
  flex: 1;
}
.like{
  position: absolute;
  right: 35px;
  top: 50px;
  font-size: 18px;
}
</style>