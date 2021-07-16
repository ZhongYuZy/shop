<template>
  <div>
    <div class="box">
      <div class="tail">
        <div>
          <van-icon name="wap-home-o" size="40"/>
          <div>商城</div>
        </div>
        <div>
          <van-icon name="wap-nav" size="40"/>
          <div>分类</div>
        </div>
        <div>
          <van-icon name="wap-nav" size="40"/>
          <div>分类</div>
        </div>
      </div>
    </div>
     <router-view/>
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
.box{
  width: 100%;
}
.tail{
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
}
</style>