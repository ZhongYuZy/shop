<template>
  <div class="app">
    <div class="sale">
    <div >热销商品</div>
    </div>
    <div>
      <div v-for="(item, index) in floor4" :key="index" class="commodity">
        <div class="img">
          <img :src="item.image" class="img1">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor4: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.floor4);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #ededed;
}
.sale {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  font-size: 17px;
  color: red;
}
.commodity {
  display: flex;
  width: 100%;
}
.img{
  width: 50%;
}
.img1{
  width: 50%;
}
</style>