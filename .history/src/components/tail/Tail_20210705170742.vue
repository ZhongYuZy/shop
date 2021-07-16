<template>
  <div class="recommand-wrap">
    <div class="title">
      <img
        class="title-img"
        src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt="本周热门榜单"
      />
      <span class="title-hotrec">本周热门榜单</span>
      <span class="title-allrec">全部榜单</span>
    </div>
    <div ref="wrapper">
      /* 这里是父盒子*/
      <ul class="cont" ref="cont">
        /* 这里是子盒子，即滚动区域*/
        <li class="cont-item" v-for="item of recommendList" :key="item.id">
          <div class="cont-img">
            <img class="img" :src="item.url" :alt="item.text" />
          </div>
          <div class="cont-dest">{{ item.text }}</div>
          <div class="cont-price">
            <span class="price">￥{{ item.price }}</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
