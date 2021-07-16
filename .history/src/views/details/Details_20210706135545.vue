<template>
  <div>
    <div class="icon">
      <van-icon name="arrow-left" />
    </div>
    <div class="middle">
      <div>运费：0</div>
      <div>剩余：1000</div>
      <div>取消收藏<van-icon name="chat-o" /></div>
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
</style>