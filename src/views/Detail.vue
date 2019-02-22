<template>
  <div>
    我是详情页面

    <h1>当前影片的ID是 {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  created () {
    // 根据 ID 请求数据
    console.log(this.$route.params.id);
  }
}
</script>
