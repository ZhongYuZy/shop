<template>
  <div>
    <Top>
      <template #top>
        <div class="box">
          <div class="sop">购物车</div>
          </div>
      </template>
    </Top>
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
  height: 40px;
}
.sop{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>