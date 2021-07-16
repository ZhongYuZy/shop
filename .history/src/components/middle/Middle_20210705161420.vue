<template>
  <div id="app">
      <div >
          <div class="classification">
              <div v-for='item in arr' :key='item' class="logo">
                  <img :src="item.image" class="img">
              </div>
              <div></div>
          </div>
      </div>
      <div></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      arr:{
          type:Array,
          required:true,
      },
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
      
  },
  mounted() {
      console.log(this.arr)
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#app{
    width: 100%;
    height: 170px;
    background-color: #eeeeee;
}

.classification{
    display: flex;
    justify-content: center;
    border-radius: 15px;
    margin-top: 10px;
    width: 96%;
    height: 100px;
    background-color: #fff;
}
.img{
    width: 50px;
    height: 50px;
}
.logo{
    width:70px;
}
</style>