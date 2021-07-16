<template>
  <div class="app">
      <div class="sale">热销商品</div>
      <div>
          <div></div>
          <div></div>
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
.app{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
}
.sale{
    font-size: 17px;
    color: red;
}
</style>