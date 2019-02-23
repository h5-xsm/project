#  项目前准备工作

1. 脚手架（vue-cli）的准备：
    vue-cli 是 vue 官方提供的 脚手架工具。

2. 安装 vue 脚手架：
    npm install -g @vue/cli  (会在电脑上提供一个 vue 这个命令)。

3. 创建项目：
    到你需要创建项目的文件夹下打开命令行：vue create xxxx 去创建一个项目 （xxxx 是项目的名字）。
    【注：在 git 命令行下创建项目会有bug , 可以在 cmd 命令行创建】。

4. cd到项目下面打开命令行：npm run serve。

5. 可以开始写项目。



# 项目步骤

1. 设置 viewport 【注：一般脚手架创建好的项目框架，就设置好了的】

2. 引进 reset.css [注：考虑是用模块去加载（放在src文件夹里面）；还是用 link 标签去加载（放在public里面）]

3. 在项目入口 js 文件（main.js）引进 reset.less 模块
    【ps: 模块最后一行没有空行报错 编辑器首先-设置-newline 勾上】

4. 注册组件：
    小组件（一个页面的一小块组件，为了可付用）：放在 src 文件夹下 commponents 文件夹下面。
    页面组件（整个页面的组件，付用不了的）：放在 src 文件夹下 views 文件夹里面。

5. 首页（film.vue）渲染在页面上：在万年老二（App.vue）中引入首页（film.vue）组件并暴露出组件选项对象。

 6. 因为在 Film.vue(首页)中的轮播图、页面底部导航等等.....小模块分出去了：所以还要在Film.vue(首页)引入页面的小组件（轮播图、页面底部导航等等） commponent 下面的 MzBanner/Index.vue(轮播图)等等... 的引入。

7. 用 swiper 插入轮播图：
    在 public 文件夹下的 index.html 引进 swiper.css 和 swiper.js 两个文件 ，在 commponent 下面的 MzBanner/Index.vue(轮播图模块) 中写轮播图的 html 代码。

8. 那后台数据来渲染 轮播图 （用 axios 来请求数据）：
    使用axios调用后台的接口。
        1.引入 axios
        2.调用 axios.get('http://localhost:3000/banner/search')

9. 把公共的 MzFooter 组件注册在 App.vue里面，不用每个页面都注册


# 知识点

1. vue 中使用 ajax:

    vue-resoure 是vue专门用来处理ajax请求的。

    axios:
        第三方提供的封装了ajax请求的一个类库。尤雨溪推荐我们使用这个，于是不再对 vue-resoure 进行维护。
        对ajax封装成了 promise 。

    使用：
        使用1 : script 引入的方式
        使用2 : npm 模块方式安装的方式 ：npm install axios

    请求方式：

    方式1. get
    axios.get(url, config)

    方式2. post
    axios.post(url, data, config)

    方式3. 普通
    axios({
        methods: '',
        url: ''
    })

    config配置 ： params   请求参数的形式  url?name=张三&age=19
        params: {
            name: '张三',
            age: 19
        }

    后台返回的数据格式，要后台作个处理才能正确使用


2. $nextTick() 在vue中这个方法里面能接收一个回调函数，能确保真实dom的更新。


3. 路由
    # 使用步骤：
        （1）安装：npm install vue-router --save 或者 yarn add vue-router

        （2）配置 vue-router 的配置文件 (主要的地方) 【PS：在 src 下 router.js】
            1. 引入 vue
            2. 引入 vue-router
            3. 使用 vue.use(vue-router) 【相当于全局安装了 router-link 和 router-view】
            4. 路由配置:
                new VueRouter({
                    // routes 数组下的第一层 都是一级路由
                    routes: [
                        {
                            // children 数组下的第一层 都是一级路由
                            // PS: 不是一级路由的话，path路径前面不要加 /
                            //PS: 二级或二级以上的路由，他们的url地址是会从一级路由开始一直做追加的。
                            // localhost:8080/#/films
                            children: [

                            ]
                        }
                    ]
                })
            5. 暴露这个配置

        （3）在 new Vue 的地方，引进配置文件 ，并设置 router 的选项 【PS：在 src 下 main.js】

        （4）页面中哪里需要切换，在哪里就放置一个坑（router-view 路由视图）

        （5）需要跳转页面，可以使用 router-link

        【PS】 在 vue-router 引进之后，全局给了我们两个组件：
            1. router-link    =>  可以看成是一个 a 标签
            2. router-view    =>  可以看成是一个 div 标签  => 或者看成  坑(路由视图)

    # 路由的层级
        （1） 一级路由   整个页面发生变化 （城市选择页 是一级路由）
        （2） 二级路由   一级路由页面中的某个位置有公用，其余位置的变化，那个其余的路由就是二级路由（电        影  影院  我的 都是二级路由）。
        （3） 三级路由

    # 路由从定向：redirect
        component: Film 【这样写可以实现 但是 url 地址变成 localhost:8080/#/，又要实现效果 地址还的是 localhost:8080/#/films 就要用从定向】  redirect: '/films' 。

    # vue-router
        （1）提供有两种路由模式：
            1.hash (默认)
            2.history

        （2）hash (默认) 与 history 如何转换模式：
            在路由配置文件中。new VueRouter 的时候传递一个 mode 的选项。

        （3）hash 与 history 的区别
            1.url地址的表现不同，hash会有一个 # 。而 history 没有就更像一个url。

            2.实现原理不同
                2.1 hash     实现原理：onhashchange 事件
                2.2 history  实现原理：基于 html5 中 新增的 history 相关的api
                        history.pushState   方法
                        history.replaceState  方法
                        window.onpopstate 事件

                2.3 history使用起来需要后台的配合。所以一般的情况下公司没有特殊要求的时候会使用hash。
                    【PS】后台 nginx 服务器配合
                        1.下载 nginx 服务器
                        2.修改 nginx 配置：
                            location / {
                                try_files $uri $uri/ /index.html;
                            }
                        3.修改 nginx 配置后要在命令行 nginx 重启：nginx.exe -s reload


    # 动态路由（路由传参）
        说明：看上去不同的两个或多个 url 地址。都能匹配到同一条规则（路由对照表）。

        localhost:8080/#/detail/100
        localhost:8080/#/detail/200       都匹配到   Detail.vue   组件。
        localhost:8080/#/detail/300

        写成动态路由：
        {
        path: '/detail/:id'  // localhost:8080/#/detail 后面不管接什么都可以匹配到  Detail.vue。
        }

        在动态路由匹配到的页面组件中，拿到传递过来的id这个参数：

            说明：在此之前，还要了解到两个东西。

                在我们项目中使用了 vue-router 之后，除了全局加了两个组件，还加了数据。

            1. $route（当前路由对象）   组件中的 data 里面。   访问：this.$route
            【所有组件中，在 data 中都加了 $route 数据】

            2. $router (路由器对象，new VueRouter 的实例化对象)   实例属性。 访问：this.$router

                $router实例属性的一些方法：学名叫编程式的导航

                编程式的导航 【用 js 代码控制跳转页面】：
                - this.$router.push()       添加一个记录，页面跳转
                - this.$router.replace()    替换当前页面，页面跳转 【一般用于登录页面】
                - this.$router.go()         前进【可以传参式页面跳转】
                - this.$router.back();      后退一个
                - this.$router.forward()    前进一个
                - this.$router......

        PS：【route: 路由的数据  、 router: 路由的实例属性，可以操作路由的一些个方法】

    # 命名视图

        （1）给 router-view 取一个名字
        （2）路由配置表的时候，component 需要修改为 components
            components: {
                // key:命名的视图路由（坑）  value ：要渲染在坑中的模块
                key: Value
                key2: value2
                default: Detail  // 把 Detail 模块渲染在没有命名的视图路由（坑）中
            }


    # 别名路由
        path: '/city',
        alias: '/abc', // 你可以 localhost:8080/city 访问  也可以  localhost:8080/abc 访问


    # 路由组件传参
        使用步骤：
            1.路由配置文件中，将 props 选项设置为 true
            2.在具体的组件中，定义上 props 。就能直接拿到对应的 路由参数
            3.组件中 就可以使用使用 id 这个 prop。 他的值就是 路由参数传递过来的值。

        路由组件传参有3种方式：
            1.boolea   router.js  定义 props: true
            2.对象方式  router.js  定义 props: {  name: '张三', age: 18 }
            3.函数方式  router.js  定义 props: function() { return {} }


    # 导航守卫（路由拦截 、路由钩子）
        导航：表示路由正在发生改变
        导航守卫能帮我们实现什么需求：拦截路由的跳转

        (1).全局前置守卫:router.beforeEach()
            说明：要进入到一个路由，但是还没有完全进入之前会触发一个钩子函数 【一般用来做路由拦截】

        (2).全局解析守卫：router.beforeResolve()

        (3).全局后置守卫：router.afterEach()
            说明：要进入到一个路由，进入之后会触发一个钩子函数 【一般用来做页面跳转的进度条】

        (4).路由独享的守卫：beforeEnter()
            说明：路由独自享有钩子函数，也可以做路由拦截,可以单独拦截某个路由 【放在要独享路由的后面】

        (5).组件内的守卫：
            - beforeRouteEnter()  【进入 页面的守卫】
            - beforeRouteUpdate()【只会在页面内使用路由参数是候守卫 如：/card/100 -> /card/200】
            - beforeRouteLeave()  【退出 页面的守卫】
            说明：在某个组件内也可以独享守卫，也可以拦截路由 【放在要独享的组件的后面】

        (6).完整的导航解析流程：
            beforeRouteLeave -> beforeEach -> beforeRouteUpdate(重用) -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach

        PS：
            // 进度的转圈圈隐藏 与 显示
            Nprogress.configure({ showSpinner: true });

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

                if (to.path === '/card' || to.path === '/money' || to.path === '/system') {
                    // next('/login') // 字符串模式
                    next({
                    path: '/login' // 对象模式
                    })
                } else {
                    next()
                }
            })

            // 全局后置守卫
            router.afterEach((to, from) => {
            // Nprogress.done()  进度条隐藏
            Nprogress.done();
            })

    #







# 扩展

1. 写单文件组件没有代码提示，在编辑器下载 vetur 和 vue 2 snippets 插件。

2. vue中因为逗号空格报错可以在终端运行：npm lint。

3. npm run build 上线的时候文件打包。

4. <router-link tag="li"></router-link> 中 tag="li"表示：渲染是 li 标签。【router-link 是默认渲染 a 标签的】


