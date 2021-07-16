<template>
  <div id="app">123456</div>
</template>

<script>
export default {
  name: '',
  props:{
    floor1:{
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
    console.log(this.floor1);
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
#app{
  width: 100%;
}
</style>