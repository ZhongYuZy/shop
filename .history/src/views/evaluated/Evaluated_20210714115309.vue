<template>
  <!-- 待评价 -->
  <div>
    <Top>
      <template #top>
        <div class="back" @click="goto">
          <van-icon name="arrow-left" color="rgb(91,171,251)" size="18px" />
        </div>
        <div class="set">待评价</div>
      </template>
    </Top>
    <div style="height: 41px"></div>
    <div class="logo">
      <img src="../../../assets/evaluate.jpg" alt />
    </div>
    <div id="entertain">
      <van-tabs v-model="active">
        <van-tab title="待评价">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <!-- <van-cell v-for="(item,index) in list" :key="index" :title="item" /> -->
              <div
                class="particulars"
                v-for="(item, index) in list"
                :key="index"
              >
                <div>
                  <img class="graph" :src="item.image_path" alt />
                </div>
                <div>
                  <div class="text">{{ item.name }}</div>
                  <div class="btn">
                    <van-button plain type="danger" round @click="simple(item)">
                      <van-icon color="red" name="chat" />评论晒单
                    </van-button>
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="已评价">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <!-- <van-cell v-for="(item,index) in list" :key="index" :title="item" /> -->
              <div class="particulars" v-for="(val, key) in obj" :key="key">
                <div>
                  <img class="graph" :src="val.goods[0].image_path" alt />
                </div>
                <div>
                  <div class="text">{{ val.goods[0].name }}</div>
                  <div class="btn">
                    <van-button plain type="danger" round @click="simple1(val)">
                      <van-icon color="red" name="chat" />查看评论
                    </van-button>
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>