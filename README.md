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