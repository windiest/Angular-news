;
(function() {
	var app = angular.module('news.controller', []);
	app.controller('indexCtrl', ['$scope', '$rootScope', '$http', 'cookie', '$window',
		function($scope, $rootScope, $http, cookie, $window) {
			var token = cookie.getCookie('token');
			var username = cookie.getCookie('username')
			$http.post('http://localhost:81/angular/news/index.php/login_api/auto_login', {
				params: {
					token: token,
					username: username
				}
			}).success(function(data) {
				console.log(data);
				if(data.code) {} else {
					window.location.href = '#/login'
				}
			})
			$scope.tabs = [{
				name: '国内最新',
				id: 1,
				url: '#/index/list'
			}, {
				name: '国际焦点',
				id: 2,
				url: '#/index/secondlist'
			}, {
				name: '游戏焦点',
				id: 3,
				url: '#/index/thirdlist'
			}, {
				name: '登录',
				id: 4,
				url: '#/login'
			}];
			$rootScope.id = 1;
			$scope.toggleTab = function(id, url) {
				console.log(id);
				$rootScope.id = id;
				$window.location.href = url;
			}
		}
	]);
	app.controller('listCtrl', ['$scope', '$http', 'swiperImg', 'apiUrl', function($scope, $http, swiperImg, apiUrl) {
		//默认显示轮播图
		$scope.isShowSwiper = true;
		//默认加载第一页
		$scope.page = 1;
		//默认显示loading
		$scope.isShow = false;
		//默认设置排序列表不出现
		$scope.sortList = false;
		$scope.type = 'pubDate';
		//设置chanelId传给详细页面
		$scope.channelId = '5572a109b3cdc86cf39001db';
		//渲染到视图的新闻数据数组
		$scope.news = [];
		//轮播图的三张图片
		$scope.swiperImg = [];
		var load = function() {
				$http.jsonp(apiUrl, {
					params: {
						page: $scope.page,
						channelId: '5572a109b3cdc86cf39001db',
						channelName: '国内最新',
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
					//测试数据，发布时删除
					data = json;
					
					$scope.isShow = true;
					console.log(data);
					$scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
					//用swiperImg自定义服务获取三张图片
					$scope.swiperImg = swiperImg.get($scope.news);
				})
			}
			//第一次进来的时候自执行加载数据
		load();
		//默认搜索内容
		$scope.searchName = '';
		//搜索框默认的状态
		$scope.isSearch = false;
		$scope.search = function() {
			$scope.isSearch = true;
		}

		$scope.cancelSearch = function() {
			$scope.isSearch = false;
		}

		//加载更多的函数
		$scope.loadMore = function() {
			$scope.isShow = false;
			$scope.page++;
			load();
		}

	}]);
	
	app.controller('thirdListCtrl', ['$scope', '$http', '$rootScope', 'swiperImg', 'apiUrl', 'apiMethod', function($scope, $http, $rootScope, swiperImg, apiUrl, apiMethod) {
			//默认显示轮播图
			$scope.isShowSwiper = true;
			$rootScope.id = 3;
			//默认加载第一页
			$scope.page = 1;
			//默认显示loading
			$scope.isShow = false;
			//设置chanelId传给详细页面
			$scope.channelId = '5572a108b3cdc86cf39001d6';
			//轮播图的三张图片
			$scope.swiperImg = [];
			$scope.news = [];
			var load = function() {
					$http.jsonp(apiUrl, {
						params: {
							page: $scope.page,
							channelId: '5572a108b3cdc86cf39001d6',
							channelName: '游戏焦点',
							callback: 'JSON_CALLBACK'
						}
					}).success(function(data) {
						//测试数据，发布时删除
						data = json;
						
						$scope.isShow = true;
						console.log(data);
						$scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
						//用swiperImg自定义服务获取三张图片
						$scope.swiperImg = swiperImg.get($scope.news);
					})
				}
				//第一次进来的时候自执行加载数据
			load();
			//默认搜索内容
			$scope.searchName = '';
			//搜索框默认的状态
			$scope.isSearch = false;
			$scope.search = function() {
				$scope.isSearch = true;
			}

			$scope.cancelSearch = function() {
				$scope.isSearch = false;
			}

			//加载更多的函数
			$scope.loadMore = function() {
				$scope.isShow = false;
				$scope.page++;
				load();
			}
		}]);
	
	app.controller('secondListCtrl', ['$scope', '$http', '$rootScope', 'swiperImg', 'apiUrl', function($scope, $http, $rootScope, swiperImg, apiUrl) {
			//默认显示轮播图
			$scope.isShowSwiper = true;
			$rootScope.id = 2;
			//默认加载第一页
			$scope.page = 1;
			//默认显示loading
			$scope.isShow = false;
			//设置chanelId传给详细页面
			$scope.channelId = '5572a108b3cdc86cf39001ce';
			//轮播图的三张图片
			$scope.swiperImg = [];
			$scope.news = [];
			var load = function() {
					$http.jsonp(apiUrl, {
						params: {
							page: $scope.page,
							channelId: '5572a108b3cdc86cf39001ce',
							channelName: '游戏焦点',
							callback: 'JSON_CALLBACK'
						}
					}).success(function(data) {
						//测试数据，发布时删除
						data = json;
						
						$scope.isShow = true;
						console.log(data);
						$scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
						//用swiperImg自定义服务获取三张图片
						$scope.swiperImg = swiperImg.get($scope.news);
					})
				}
				//第一次进来的时候自执行加载数据
			load();
			//默认搜索内容
			$scope.searchName = '';
			//搜索框默认的状态
			$scope.isSearch = false;
			$scope.search = function() {
				$scope.isSearch = true;
			}

			$scope.cancelSearch = function() {
				$scope.isSearch = false;
			}

			//加载更多的函数
			$scope.loadMore = function() {
				$scope.isShow = false;
				$scope.page++;
				load();
			}
	}]);
	
	//新闻详细页的控制器
	app.controller('detailCtrl', ['$scope', '$http', '$state', 'apiUrl', function($scope, $http, $state, apiUrl) {
		//是否显示放大图片
		$scope.isShowGallery = false
		//获取id，视图下一页逻辑需要的数据
		$scope.id = parseInt($state.params.id);
		//获取channelId，根据频道取对应的新闻数据
		$scope.channelId = $state.params.channelId;
		//默认加载loading等待数据回调后消失
		$scope.isShow = false;
		$scope.showGallery = function(isshow, url) {
			$scope.isShowGallery = isshow;
			console.log(url);
			$scope.imgUrl = "background-image:url(" + url + ")";
		}
		console.log($state.params)
		$http.jsonp(apiUrl, {
			params: {
				page: 1,
				channelId: $scope.channelId,
				//channelName: '国内最新',
				channelName: '',
				callback: 'JSON_CALLBACK'
			}
		}).success(function(data) {
			//测试数据，发布时删除
			data = json;
			
			console.log(data);
			$scope.isShow = true;
			$scope.allNum = data.showapi_res_body.pagebean.allNum;
			$scope.new = data.showapi_res_body.pagebean.contentlist[$state.params.id];
			console.log($scope.new)
		})
	}]);
	
	app.controller('loginsCtrl', ['$scope', '$http', 'cookie', function($scope, $http, cookie) {
		$scope.page1 = true
			$scope.page2 = false
			$scope.show = function(page) {
				if(page == 1) {
					$scope.page1 = true;
					$scope.page2 = false;
				} else if(page == 2) {
					$scope.page2 = true;
					$scope.page1 = false
				}
		}
		$scope.login = function() {
			console.log('username:' + $scope.username);
			console.log('password:' + $scope.password);
			$http.post('http://localhost:81/angular/news/index.php/login_api/login', {
				params: {
					username: $scope.username,
					password: $scope.password
				}
			}).success(function(data) {
				console.log(data);
				if(data.code) {
					cookie.setCookie('token', data.info.token);
					cookie.setCookie('username', data.username);
					window.location.href = "#/index/list"
				}
			})
		}
	}]);
	app.controller('registerCtrl', ['$scope', '$http', 'cookie', function($scope, $http, cookie) {
		$scope.register = function() {
			console.log('username:' + $scope.username);
			console.log('password:' + $scope.password);
			$http.post('http://localhost:81/angular/news/index.php/login_api/register', {
				params: {
					username: $scope.username,
					password: $scope.password
				}
			}).success(function(data) {
				console.log(data);
				if(data.code) {
					cookie.setCookie('username', data.username);
					cookie.setCookie('token', data.info.token);
					window.location.href = '#/index/list';
				}
			})
		}
	}]);
	app.controller('settingCtrl', ['$scope', '$http', 'cookie', function($scope, $http, cookie) {
		var token = cookie.getCookie('token');
		var username = cookie.getCookie('username')
		$http.post('http://localhost:81/angular/news/index.php/login_api/auto_login', {
			params: {
				token: token,
				username: username
			}
		}).success(function(data) {
			console.log(data);
			if(data.code) {} else {
				window.location.href = '#/login'
			}
		})
	}])
})();