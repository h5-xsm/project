// 首页（film.vue）渲染在页面上：在万年老二（App.vue）中引入首页（film.vue）
// 组件并暴露出组件选项对象。

<template>
<div>
  <router-view name='top'></router-view>

  <router-view></router-view>
</div>

  <!-- <div>-->
    <!--<router-view></router-view>-->

    <!--
      1. url地址：localhost:8080/#/films   页面绚烂组件：Film.vue
      2. localhost:8080/#/cinemas   Cineam.vue
      3. localhost:8080/#/center   Center.vue
     -->
    <!--<MzFooter></MzFooter>-->
  <!--</div> -->
</template>
