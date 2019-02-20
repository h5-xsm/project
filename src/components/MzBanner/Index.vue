<template>
  <div class="swiper-container mz-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="item in bannerList"
          :key="item._id">
          <img :src="item.imgUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
/* 使用axios调用后台的接口。
   1.引入 axios
  2. 在创建好后的钩子函数上调用 axios.get('http://localhost:3000/banner/search')
*/

// 1.引入 axios
import axios from 'axios';
export default {
  data: function () {
    return {
      // 轮播图的数据
      bannerList: [],

      // Swiper的实例对象
      mySwiper: null
    }
  },

  // 初始化Swiper 方法。
  methods: {
    initSwiper () {
      // 对以下代码不校验 eslint 的规则 ：/* eslint-disable */。
      /* eslint-disable */
      this.mySwiper = new Swiper ('.swiper-container' , {

        autoplay:true, // 自动轮播
        loop:true, // 无限轮播

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
      // 对以下代码启用校验 eslint 的规则 ：/* eslint-enable */。
      /* eslint-enable */
    }
  },

  // 2. 在创建好后的钩子函数上调用 axios.get('http://localhost:3000/banner/search')
  created () {
    axios.get('http://localhost:3000/banner/search', {
      // params 才是 get 的参数
      params: {
        pageSize: 10
      }
    }).then((res) => {
      // 注意： res 不是 后台返回给你的数据，真正后台给你返回的数据在 res.data 上面。
      console.log(res);
      let data = res.data;
      if (data.code === 0) {
        this.bannerList = data.data;

        /*
          轮播图不能轮播？
          1. 数据更新之后，对轮播图做个更新。
          2. 数据更新之后，再做 new Swiper (PS: 数据的更新到页面真实DOM的更新还需要一点点时间)
          $nextTick() 这个函数能确保真实dom的更新。
        */

        // 数据更新之后，对轮播图做个更新。
        this.$nextTick(() => {
          this.initSwiper();
        })
      } else {
        alert('网络异常请重试');
      }
    })
  },

  // 在 mounted（挂载上的钩子函数上） 初始化Swiper。
  mounted: function () {
  }
}
</script>

// 用 less 的形式给banner图写样式
<style lang="less">
  .mz-banner{
    height: 210px;
    img{
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet{
      opacity: 1;
    }
  }
</style>
