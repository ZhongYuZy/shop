<template>
    <!-- 评论 -->
    <div>
        <Top>
      <template #top>
        <div class="box">
          <div class="fillet" @click="onclick">
            <van-icon name="arrow-left" />
          </div>
          <div class="order">待评价</div>
        </div>
      </template>
    </Top>
        <div style="height: 41px;"></div>
        <div style="display: flex; padding: 10px;">
            <div>
                <img class="graph" :src="comment.image_path" alt />
            </div>
            <div style="margin-left: 20px;">
                <div style="margin: 20px 0;">商品评分</div>
                <van-rate v-model="value" />
            </div>
        </div>
        <div id="remark">
            <van-field v-model="message" rows="2" autosize type="textarea" placeholder="说说你的感受吧~~" show-word-limit />
        </div>
        <div style="margin: 20px 0;padding: 10px;">
            <van-checkbox v-model="checked">匿名评价<an-checkbox>
        </div>
        <div style="padding:10px;">
            <van-button type="primary" size="large" @click="submit">提交<an-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    name: '',
    props: {},
    data () {
        return {
            message: "",
            checked: false,
            comment: [],
            value: 0,
        }
    },
    components: {},
    methods: {
        // 返回
         onclick() {
      this.$router.back();
    },
        // 提交
        submit () {
            this.$api.comment({
                id: this.comment.cid,
                rate: this.value,
                content: this.message,
                anonymous: this.checked,
                _id: this.comment._id,
                order_id: this.comment.order_id,
                image: []
            }).then(res => {
                // console.log(res);
                if (res.code === 200) {
                    Toast.success('评论成功');
                    this.$router.back()
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted () {
        this.comment = JSON.parse(this.$route.query.comment)
        console.log(this.comment);
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.fillet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: gray;
  font-size: 16px;
  margin-top: 5px;
}
.order {
  width: 310px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 6px;
}
.graph {
    width: 100px;
}
</style>