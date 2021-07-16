<template>
  <div>
    <div class="box">
      <div class="tail">1216546</div>
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
  background-color: skyblue;
}
</style>