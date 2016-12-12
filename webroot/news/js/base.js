var app = angular.module('newsApp', ['ui.router', 'ng.post', 'news.controller', 'news.service', 'news.directive']);
//配置路由，
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
		//url+#/index
		url: '/index',
		templateUrl: 'template/index.html',
		controller: 'indexCtrl'
	}).state('index.list', {
		//国内最新
		url: '/list',
		templateUrl: 'template/newsList.html',
		controller: 'listCtrl'
	}).state('index.secondlist', {
		//游戏焦点
		url: '/secondlist',
		templateUrl: 'template/secondList.html',
		controller: 'secondListCtrl'
	}).state('index.thirdlist', {
		//国际焦点
		url: '/thirdlist',
		templateUrl: 'template/thirdList.html',
		controller: 'thirdListCtrl'
	}).state('detail', {
		//新闻的详细内容
		url: '/detail/:channelId/:id',
		templateUrl: 'template/detail.html',
		controller: 'detailCtrl'
	}).state('login', {
		url: '/login',
		templateUrl: 'template/logins.html',
		controller: 'loginsCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: 'template/register.html',
		controller: 'registerCtrl'
	}).state('setting', {
		url: '/setting',
		templateUrl: 'template/setting.html',
		controller: 'settingCtrl'
	})
	$urlRouterProvider.when('', '/index/list');
}])
//设置api的路径
app.value('apiUrl','http://localhost:12345/newsApi');
//app.value('apiUrl','http://localhost:12345/news/dist/js/test.json');
//设置api请求的方法，发布时候用jsonp，get只是请求用来请求测试的json文件～
app.value('apiMethod','get');
//测试数据
var news = json;
console.log(news);
