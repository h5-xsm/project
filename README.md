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


# 扩展

1. 写单文件组件没有代码提示，在编辑器下载 vetur 和 vue 2 snippets 插件
