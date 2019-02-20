//  因为在 Film.vue(首页)中的轮播图、页面底部导航等等.....小模块分出去了：
//  所以还要在Film.vue(首页)引入页面的小组件（轮播图、页面底部导航等等）
//  commponent 下面的 MzBanner/Index.vue(轮播图)等等... 的引入。

<template>
    <div>
        <MzBanner></MzBanner>
        <MzTabs></MzTabs>
        <MzFooter></MzFooter>
    </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';
import MzFooter from '../components/MzFooter/Index';

export default {
  // 注册局部组件
  components: {
    MzBanner: MzBanner,
    MzFooter: MzFooter,
    MzTabs: MzTabs
  }
}
</script>
