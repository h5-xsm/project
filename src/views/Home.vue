// 这是个一级路由，他包裹着 film、cinema、center 这些二级路由
<template>
  <div>
    <!-- 这里得要有个坑，去显示  film cinema center -->
    <router-view></router-view>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '../components/MzFooter/Index.vue';

export default {
  components: {
    MzFooter
  }
}
</script>
