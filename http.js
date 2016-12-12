/**
 * @author wsscat
 */
//require属于AMD加载方案 seajs属于CMD加载方案
//创建服务器模块
var http = require('http');
//读取文件的模块
var fs = require('fs');
//处理url的模块
var url = require('url');
//解析url的信息
var path = require('path');
//mime格式content-type格式
var mime = require('./mime.js')
	//处理字符串的模块
var querystring = require('querystring')

//获取新闻信息的函数拿回来
var newsApi = require('./newsApi.js');
exports.newsApi = newsApi.newsApi;

//获取图灵机器人信息的函数拿回来
var turingApi = require('./turingApi.js');
exports.turingApi = turingApi.turingApi;

//用nodejs的原生模块http的createServer方法创建一个服务器
http.createServer((request, response) => {
	//处理字符串，避免中文或者符号的识别问题
	var pathname = url.parse(request.url).pathname;
	//拿url的参数
	var paramStr = url.parse(request.url).query;
	//把url拿回来的参数处理成对象
	var param = querystring.parse(paramStr)
	//console.log("路由" + pathname);
	//判断浏览器只输入localhost:12345的情况
	if(pathname.slice(-1) === "/") {
		pathname = pathname + 'index.html';
	}
	//拼接绝对路径
	var absPath = __dirname + '/webroot' + pathname
		//注意/webroot/index.html资源路径是错误的
		//这个才是正确的./webroot/index.html
		//判断是否存在我们要请求的文件
	fs.exists(absPath, function(exists) {
		//exists返回一个布尔值，根据布尔值判断文件是否存在，如果存在则fs.readFile读取该文件，并把读取的结果返回给浏览器
		if(exists) {
			//读取webroot服务器文件夹的某个资源，以二进制的方式读取
			fs.readFile(absPath, 'binary', function(err, data) {
				if(err) throw err;
				//获取文件的后缀格式，格式如.css .html .js
				var ext = path.extname(pathname);
				//处理后缀，例如把.css处理成css
				ext = ext.slice(1);
				var contentType = mime.types[ext];
				//写文件的请求头
				response.writeHead(200, {
						'Content-Type': contentType
					})
					//以二进制的方式解析结果，并输出到浏览器
				response.end(data, 'binary');
			})
		} else {
			//文件不存在则判断是否能进入某个路由，没有则输出404
			//根据路由判断进入到那个分支
			switch(pathname) {
				case '/newsApi':
					//请求新闻的内容
					// 测试链接 http://localhost:12345/newsApi?callback=JSON_CALLBACK&page=1&channelId=5572a109b3cdc86cf39001db&channelName=%E5%9B%BD%E5%86%85%E6%9C%80%E6%96%B0
					newsApi.newsApi(param, function() {}, response);
					break;
				case '/turingApi':
					//请求新闻的内容
					//测试链接 http://localhost:12345/turingApi?callback=JSON_CALLBACK&message=%E5%A7%9A%E6%98%8E
					turingApi.turingApi(param, function() {}, response);
					break;
				default:
					//在找不到任何文件的情况重定向到index.html
					response.writeHead(302, {
						'Location': '/index.html'
					});
					//在服务器目录下找不到文件就报404错误
					response.end();
					//response.end('<p>404</p>');
					break;
			}
		}
	})
}).listen(12345);
//监听12345端口，端口号可以自定义
console.log('在浏览器里面打开http://localhost:12345/news/index.html');