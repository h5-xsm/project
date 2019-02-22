//  因为在 Film.vue(首页)中的轮播图、页面底部导航等等.....小模块分出去了：
//  所以还要在Film.vue(首页)引入页面的小组件（轮播图、页面底部导航等等）
//  commponent 下面的 MzBanner/Index.vue(轮播图)等等... 的引入。

<template>
    <div>
        <MzBanner></MzBanner>
        <MzTabs></MzTabs>

        <button @click="goCity">点击跳转页面</button>

        <ul>
          <router-link tag="li" to="/detail/100">流浪地球</router-link>
          <router-link tag="li" to="/detail/200">家和万事惊</router-link>
          <router-link tag="li" to="/detail/300">喜剧之王</router-link>
        </ul>
    </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';

export default {
  // 注册局部组件
  components: {
    MzBanner: MzBanner,
    MzTabs: MzTabs
  },
  methods: {
    goCity () {
      // 字符串跳转
      // this.$router.push('/city')

      /* 对象方式
        path        - 路径
        name        - 名字
        params      - 路由传参
        query       - 查询字符串传参，url ？的方式

        【PS: params 和 path 不能共同使用。】
      */
      this.$router.push({
        // 根据你定义的 path
        // path: '/city',
        params: {
          id: 10
        },
        // query: {
        //   id: 10
        // },
        // 命名路由 【名命了路由就可以不用 根据你定义的 path 跳转】
        name: 'hhh'
      })
    }
  }
}
</script>
