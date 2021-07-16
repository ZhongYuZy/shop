<template>
  <div class="app">
      <div class="sale">热销商品</div>
      <div class="commodity" v-for="(item,index) in floor4" :key:'index'>
          <div></div>
          <div></div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    floor4:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.floor4);
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.app{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ededed;
}
.sale{
    margin: 10px 0;
    font-size: 17px;
    color: red;
}
.commodity{
  width: 100%;
}
</style>