//引入gulp模块
var gulp = require('gulp');
//压缩js代码的模块
var uglify = require('gulp-uglify');
//重名名的模块
var rename = require('gulp-rename');
//合并代码
var concat = require('gulp-concat');
//压缩css模块
var minifycss = require('gulp-minify-css');
//压缩html模块
var minifyhtml = require('gulp-minify-html');
//压缩图片的模块
var imagemin = require('gulp-imagemin')
	//定义一个压缩js的任务
gulp.task('minify', function() {
	gulp.src(['webroot/news/js/angular.js', 'webroot/news/js/ngPost.js', 'webroot/news/js/angular-ui-router.js', 'webroot/news/js/swiper.js'])
		//把js合并成main.js
		.pipe(concat('framework.js'))
		//重名名
		.pipe(rename({
			//修改后缀
			suffix: '.windiest',
		}))
		//导出js
		.pipe(gulp.dest('webroot/news/dist/js'));

	//引入需要被处理的js文件
	gulp.src(['webroot/news/js/base.js', 'webroot/news/js/controller/controller.js', 'webroot/news/js/service/service.js', 'webroot/news/js/directive/directive.js'])
		//把js合并成main.js
		.pipe(concat('main.js'))
		//重名名
		.pipe(rename({
			//修改后缀
			suffix: '.windiest',
		}))
		//压缩js
		.pipe(uglify())
		//导出js
		.pipe(gulp.dest('webroot/news/dist/js'));
});
//定义一个压缩css的任务
gulp.task('minifycss', function() {
	gulp.src(['webroot/news/css/*.css'])
		.pipe(concat('main.css'))
		//重名名
		.pipe(rename({
			//修改后缀
			suffix: '.windiest',
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('webroot/news/dist/css'))
})
gulp.task('minifyhtml', function() {
	gulp.src(['webroot/news/directive/*.html'])
		.pipe(minifyhtml())
		.pipe(gulp.dest('webroot/news/dist/html/directive'))

	gulp.src(['webroot/news/template/*.html'])
		.pipe(minifyhtml())
		.pipe(gulp.dest('webroot/news/dist/html/template'))
})

gulp.task('imagemin', function() {
	gulp.src('webroot/news/image/*+(jpg|png|gif|jpeg)')
		.pipe(imagemin({
			optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest('webroot/news/dist/image'))
})

//监听改动的js并执行压缩任务
//gulp.watch(['js/base.js', 'js/controller/controller.js', 'js/service/service.js', 'js/directive/directive.js'], ['minify'])

gulp.task('default', ['minify', 'minifycss', 'minifyhtml', 'imagemin']);