<template>
  <div>
    <div class="app">
      <div class="location">
        <van-icon name="arrow-down" />
      </div>
      <div>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: "",
  props: {},
  data() {
    return {
      
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.app {
  width: 100%;
  height: 35px;
  display: flex;
  background-color: #f2f2f2;
}
.location {
  margin: 7px 0;
}
</style>