<template>
  <div id="app">
      <div class="classification">
          <div>
              <div v-for='(item , index) in arr' :key='index'>
                  <img :src="item.image">
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
          required:true
      },
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
      console.log(object);
  },
  mounted() {

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
</style>