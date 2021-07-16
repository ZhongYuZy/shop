<template>
  <div>
    <template>
      <Slot></Slot>
    </template>
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

</style>