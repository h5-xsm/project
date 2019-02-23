import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.less'; // 在项目入口 js 文件（main.js）引进 reset.less 模块
import router from './router.js'
import 'nprogress/nprogress.css';
import './assets/styles/common.less';

// 让浏览器的 console 里面不出现一个生产的提示
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
