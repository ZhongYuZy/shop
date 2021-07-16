<template>
  <div id="app">
      <div class="classification">
          <div>
              <div v-for='item in arr' :key='item'>
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
          type:'Number',
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
    display: flex;
    justify-content: center;
    width: 100%;
    height: 170px;
    background-color: #eeeeee;
}

.classification{
    border-radius: 15px;
    margin-top: 10px;
    width: 96%;
    height: 100px;
    background-color: #fff;
}
.img{
    w
}
</style>