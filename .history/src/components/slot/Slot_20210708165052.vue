<template>
  <div>
       
    <div class="app">
      <div class="location" @click="Location">
        <div>{{ city ? city : "定位中" }}</div>
        <van-icon name="arrow-down" />
      </div>
     
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

</style>