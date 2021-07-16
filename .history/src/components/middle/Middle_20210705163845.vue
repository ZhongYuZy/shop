<template>
  <div id="app">
      <div>
          <div class="classification">
              <div v-for='(item , index) in arr' :key='index' class="logo">
                  <img :src="item.image" class="img">
                    {{item.mallCategoryName}}
              </div>
          </div>
           <div></div>
      </div>
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
      obj:{
          required:true,
      }
  },
  data () {
    return {
        list:""
    }
  },
  components: {},
  methods: {
      
  },
  mounted() {
      console.log(this.arr)
      this
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
     align-items: center;
    border-radius: 15px;
    margin: 10px 0 0 7px; 
    width: 96%;
    height: 100px;
    background-color: #fff;
}
.img{
    width: 50px;
    height: 50px;
}
.logo{
   margin: 0 5px;
    width:60px;
    margin-bottom: 10px;
}
</style>