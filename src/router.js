// router.js 就是 vue-router 的配置文件

/*
  步骤
  1. 引入 vue
  2. 引入 vue-router
  3. 使用 vue.use(vue-router)
  4. 路由配置
  new VueRouter({
    routes: [

    ]
  })
  5. 暴露这个配置
*/

// 1. 引入 vue
import Vue from 'vue';

// 2. 引入 vue-router
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Center from './views/Center.vue';
import Cinema from './views/Cinema.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import Card from './views/Card.vue';
import Money from './views/Money.vue';
import System from './views/System.vue';
import Login from './views/Login.vue';
import Nprogress from 'nprogress';

// 进度的转圈圈隐藏 与 显示
Nprogress.configure({ showSpinner: true });

// 3. 使用 vue.use(vue-router)
//  VueRouter  为什么要使用 Vue.use(), 为了去触发 VueRouter 的install 方法
Vue.use(VueRouter);

// 4. 路由配置
let router = new VueRouter({
  mode: 'hash',

  // 配置路由对照表【就是一个 url 地址 对应 怎么样的视图组件】

  // localhost:8080/#/films  访问组件 Film.vue
  // localhost:8080/#/cinemas 访问组件  Cinema.vue
  // localhost:8080/#/centers 访问组件  Center.vue
  // localhost:8080/#/city 访问组件  City.vue

  // routes 数组下的第一层 都是一级路由
  routes: [
    {
      path: '/', // /home 简写成 /
      component: Home,
      // children 数组下的第一层 都是一级路由
      // PS: 不是一级路由的话，path路径前面不要加 /
      // PS: 二级或二级以上的路由，他们的url地址是会从一级路由开始一直做追加的。
      // localhost:8080/#/home/films
      children: [
        {
          path: 'films', // 就是 url 路径
          component: Film // 就是引进的组件
        },
        {
          path: 'centers',
          component: Center
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        // 定义一个空的二级路由，让页面打开走到 films 页面
        {
          path: '',
          // component: Film 【这样写可以实现 但是 url 地址变成 localhost:8080/#/ ，
          // 又要实现效果 地址还的是 localhost:8080/#/films 就要用从定向】
          redirect: '/films' // redirect 从定向
        }
      ]
    },
    {
      // 命名路由
      name: 'hhh',
      // 城市选择页
      path: '/city',

      // 别名
      alias: '/abc', // 你可以 localhost:8080/city 访问  也可以  localhost:8080/abc 访问

      // component: City

      // 命名视图：路由配置表的时候，component 需要修改为 components。
      components: {
        top: City, // 把 City 模块渲染在命名的视图路由（坑）name:'top' 中。
        default: Detail // 把 Detail 模块渲染在没有命名的视图路由（坑）中。
      }
    },
    {
      // 详情页
      path: '/detail/:id',
      component: Detail,
      props: true
    },

    // 组件守卫的案例
    // {
    //   path: '/card/:abc',
    //   component: {
    //     render (h) {
    //       let _this = this;
    //       return h('div', [
    //         '卖座卡页面',
    //         h('button', {
    //           on: {
    //             click: function () {
    //               console.log('我被点击了');
    //               _this.reload()
    //             }
    //           }
    //         }, [
    //           '我的天',
    //           h('span', '我就是个span')
    //         ])
    //       ]);
    //     },
    //     methods: {
    //       reload () {
    //         // console.log('1111');
    //         // router.push('/card/李四'); 等同于下面对象的方法
    //         router.push({
    //           path: '/card/李四'
    //         })
    //       }
    //     },
    //     // 组件内的路由守卫
    //     beforeRouteEnter (to, from, next) {
    //       console.log('enter');
    //       next();
    //     },
    //     // 只会在页面内使用路由参数是候  如：/card/100 -> /card/200
    //     beforeRouteUpdate (to, from, next) {
    //       console.log('update');
    //       next();
    //     },
    //     beforeRouteLeave (to, from, next) {
    //       console.log('leave');
    //       next();
    //     }
    //   }
    // },
    // {
    //   path: '/money',
    //   component: {
    //     render (h) {
    //       return h('div', '余额页面');
    //     }
    //   }
    // },
    // {
    //   path: '/system',
    //   component: {
    //     render (h) {
    //       return h('div', '设置页面');
    //     }
    //   }
    // },

    {
      path: '/card',
      component: Card
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/system',
      component: System
    },
    {
      path: '/login',
      component: Login
    },

    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films'
    }

    // {
    //   path: '/films', // 就是 url 路径
    //   component: Film // 就是引进的组件
    // }
  ]
})

/**
 * 路由守卫中的参数
 * 例如：a -> b ; a去到b
 *
 * to 将要去的路由的路由对象    to就是b
 * from 从哪里去的路由的路由对象    from就是a
 * next 是否允许去
 *
 *  a -> b  如果不想去到b   next(false) 或者不使用 next()
 *          如果允许去到b   next()
 *          如果不想让他去 b 页面 ， 并想让他去 /login页面 ：next('/login')
 */

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // Nprogress.start()  进度条显示出来
  Nprogress.start();

  if ((to.path === '/card' || to.path === '/money' || to.path === '/system') && !sessionStorage.getItem('nickname')) {
    // next('/login') // 字符串模式
    next({
      path: '/login', // 对象模式

      // 从定向到登陆后用户想去的页面
      query: {
        redirect: to.fullPath
      }
    })
    next();
  } else {
    next()
  }
})

// 全局后置守卫
router.afterEach((to, from) => {
  // Nprogress.done()  进度条隐藏
  Nprogress.done();
})

// 5. 暴露这个配置 【就是暴露第4步的配置】
export default router;
