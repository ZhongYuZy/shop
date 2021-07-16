<template>
  <div>
      <Slot>
        <template #top>
          <div class="box">
            <van-icon name="arrow-left" />
          </div>
        </template>
      </Slot>
  </div>
</template>

<script>
import Slot from '../../components/slot/Slot'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
    Slot
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  
}
</style>