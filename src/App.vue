// 首页（film.vue）渲染在页面上：在万年老二（App.vue）中引入首页（film.vue）
// 组件并暴露出组件选项对象。

<template>
  <div>
    <Film></Film>
  </div>
</template>

<script>

import Film from './views/Film.vue';

export default {
  // 局部注册 Film 组件
  components: {
    Film: Film
  }
}
</script>
