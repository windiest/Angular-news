;
(function() {
	//组件组件
	var app = angular.module('news.directive', [])
	//新闻列表
	app.directive('newsList', [function() {
		return {
			templateUrl: 'directive/newsList.html'
		}
	}])
	//搜索框
	app.directive('searchBar', [function() {
		return {
			templateUrl: 'directive/searchBar.html'
		}
	}])
	//轮播图
	app.directive('swiper', [function() {
		return {
			templateUrl: 'directive/swiper.html',
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	}])
	//loading
	app.directive('loading',[function() {
		return {
			templateUrl: 'directive/loading.html'
		}
	}])
})()