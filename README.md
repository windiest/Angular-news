<div align="center">
<p><img width="150" src="https://wscats.github.io/Angular-news/news/image/windiest.png"></p>

<h1>Angular News</h1>

<p>
  <strong>Use Weui and Angular prepared by the news client</strong>,
  <a href="https://wscats.github.io/Angular-news/news/indexTest.html#/index/list">Live Demo</a>
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/windiest">Winds</a> and
    <a href="https://github.com/Wscats">Wscats</a>
  </sub>
</p>

<p>
<a href="https://github.com/Wscats/news"><img src="https://wscats.github.io/Angular-news/news/image/npm.svg" alt="NPM version"></a>
<a href="https://github.com/Wscats/news"><img src="https://wscats.github.io/Angular-news/news/image/mit.svg" alt="MIT License"></a>
<a href="https://github.com/Wscats/news"><img src="https://wscats.github.io/Angular-news/news/image/linux.svg" alt="Linux Build"></a>
<a href="https://github.com/Wscats/news"><img src="https://wscats.github.io/Angular-news/news/image/windows.svg" alt="Window Build"/></a>
</p>

</div>


## Installation(Git)

克隆项目地址并下载（需要已安装[Git](https://git-scm.com/downloads)），[点击预览（移动端效果更佳）](https://wscats.github.io/Angular-news/news/indexTest.html)，[新增Vue2版本](https://wscats.github.io/Angular-news/vue-news/public/index.html)
```
git clone https://github.com/Wscats/news.git
```

启动服务（http://localhost:12345/news/index.html）
```
npm run dev
```
## Building
通过`npm`安装本地服务第三方依赖模块（需要已安装[Node.js](https://nodejs.org/)），当然也可以先不安装依赖暂时省略这步，运行`node http`直接查看项目效果
```
npm install
```
然后执行[gulp](https://github.com/gulpjs/gulp)构建项目文件和打开服务器等
```
npm run test
```


## Installation(NPM)

npm安装名为20的模块
```
npm install 20
```
找到模块下载后的位置，在node_modules的20文件夹下
```
cd /node_modules/20
```
通过`npm`安装本地服务第三方依赖模块（需要已安装[Node.js](https://nodejs.org/)），当然也可以先不安装依赖暂时省略这步，运行`node http`直接查看项目效果
```
npm install
```
执行node指令运行http.js
```
node http
```
用浏览器打开链接
```
http://localhost:12345/news/index.html
```

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 [Winds](https://github.com/windiest)❤︎[Wscats](https://github.com/Wscats)

## Back-end(PHP)
[后端源码地址](https://github.com/Wscats/CI-News-CMS)
登录界面:
url根据服务器域名对应更改(例如本机url就是localhost)
```
url/news/php/index.php/login
main = url/news/php/index.php
```

### 登录接口
|Port|URL|Method|
|-|-|-|
|登录接口|main/login_api/login|POST|

|Params|Other|
|-|-|
|username,password|账号:yaojialong,12345678|

### 频道接口
|Port|URL|Method|
|-|-|-|
|频道接口|main/news_api/get_channel|GET|

|Params|Other|
|-|-|
|无||

### 自动登录接口
|Port|URL|Method|
|-|-|-|
|自动登录接口|main/login_api/auto_login|POST|

|Params|Other|
|-|-|
|username,token||

### 根据频道显示对应新闻
|Port|URL|Method|
|-|-|-|
|根据频道显示对应新闻|main/news_api/show_detail_by_channel_id|GET|

|Params|Other|
|-|-|
|page,channel_id|例如:channel_id:4 军事 6 推荐 7 热点 8 娱乐|

### 新闻根据id显示详细内容的接口
|Port|URL|Method|
|-|-|-|
|新闻根据id显示详细内容的接口|main/news_api/show_detail|GET|

|Params|Other|
|-|-|
|id||

### 注册用户的接口
|Port|URL|Method|
|-|-|-|
|注册用户的接口|main/login_api/register|POST|

|Params|Other|
|-|-|
|params{username,password}||

### 插入新闻的接口
|Port|URL|Method|
|-|-|-|
|插入新闻的接口|main/news_api/insert_news|GET|

|Params|Other|
|-|-|
|title,text||

### 删除新闻的接口
|Port|URL|Method|
|-|-|-|
|删除新闻的接口|main/news_api/delete_news|GET|

|Params|Other|
|-|-|
|id||
