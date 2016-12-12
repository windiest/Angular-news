/**
 * @author wsscat
 */
var http = require('http');
var querystring = require('querystring');
function turingApi(param, callback, response) {
	console.log(param)
	var data = {
		//图灵机器人需要的API KEY
		key: 'c75ba576f50ddaa5fd2a87615d144ecf',
		//向图灵机器人发送的问题
		info: param.message
	};
	http.request({
		//域名
		hostname: 'www.tuling123.com',
		//端口号
		port: '80',
		//路由和参数  后面是需要提交的数据
		path: '/openapi/api?' + querystring.stringify(data),
		//请求方法 可以为post
		method: 'GET'
	}, function(resquest) {
		//console.log('STATUS: ' + resquest.statusCode);
		//console.log('HEADERS: ' + JSON.stringify(resquest.headers));
		resquest.setEncoding('utf8');
		//这里用str来不间断监听数据
		var str = '';
		resquest.on('data', function(data) {
			console.log('相应的内容为: ' + data);
			str += data;
			//如果在这里直接打印数据，会有可能丢失数据
			//response.end(param.callback + "(" + data + ")");
		});
		//监听数据成功后才去拼jsonp的数据
		resquest.on('end', function() {
			if(response){
				response.end(param['callback'] + "(" + str + ")");
			}else{
				callback(str)
			}
			//response.end(str);
		})
	}).on('error', function(e) {
		console.log('problem with request: ' + e.message);
	}).end();
}
exports.turingApi = turingApi;