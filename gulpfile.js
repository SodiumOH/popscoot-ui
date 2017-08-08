var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var removeHtmlComments = require('gulp-remove-html-comments');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var browserSyn = require('browser-sync');
var reload = browserSyn.reload;
/** ======
Parameters
======= */
var SRC = "src", DEST = "app", INJ = ""

gulp.task('default', function() {
	console.log(`
	==========
	ui project
	==========
	`);
});

gulp.task('build-media', function() {
	return gulp.src([
		SRC + "/img/*.png",
		SRC + "/img/*.jpg",
	])
	.pipe(imagemin())
	.pipe(gulp.dest(DEST + '/img'));
});

var LIBRARIES = [
	'./node_modules/moment/min/moment.min.js',
	'./node_modules/font-awesome/css/font-awesome.min.css',
	'./node_modules/font-awesome/fonts/*.eot',
	'./node_modules/font-awesome/fonts/*.svg',
	'./node_modules/font-awesome/fonts/*.ttf',
	'./node_modules/font-awesome/fonts/*.woff',
	'./node_modules/font-awesome/fonts/*.woff2',
	'./node_modules/font-awesome/fonts/*.otf',
	'./node_modules/roboto-fontface/css/roboto/roboto-fontface.css',
	'./node_modules/roboto-fontface/fonts/Roboto/*.eot',
	'./node_modules/roboto-fontface/fonts/Roboto/*.svg',
	'./node_modules/roboto-fontface/fonts/Roboto/*.ttf',
	'./node_modules/roboto-fontface/fonts/Roboto/*.woff',
	'./node_modules/roboto-fontface/fonts/Roboto/*.woff2',
	'./node_modules/roboto-fontface/fonts/Roboto/*.otf',
	'./node_modules/angular/angular.min.js',
	'./node_modules/angular-route/angular-route.min.js',
	'./node_modules/angular-aria/angular-aria.min.js',
	'./node_modules/angular-animate/angular-animate.min.js',
	'./node_modules/angular-material/angular-material.min.css',
	'./node_modules/angular-material/angular-material.min.js',
	'./node_modules/angular-avatar/dist/angular-avatar.js',
	'./node_modules/lf-ng-md-file-input/dist/*',
	'./node_modules/ng-file-upload/dist/*',
	'./node_modules/angular-drag-and-drop-lists/*.js',
	'./node_modules/iframe/*',
	'./node_modules/angular-translate/dist/*.js',
	'./node_modules/mdPickers/dist/*',
	'./node_modules/ng-material-datetimepicker/dist/*',
	'./node_modules/angular-chart.js/dist/angular-chart.min.js',
	'./node_modules/chart.js/dist/Chart.min.js',
	'./node_modules/chart.js/dist/Chart.js'
];

gulp.task('build-lib', function() {
	return gulp.src(LIBRARIES, {
		base: './node_modules'
	})
	.pipe(gulp.dest(DEST + '/lib'));
});

gulp.task('build-css', function() {
	return gulp.src([SRC + '/scss/style.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(DEST + '/css'));
});

var JAVASCRIPTS = [
	SRC + '/js/app.js',
	SRC + '/js/ctrl/root.js',
	SRC + '/js/ctrl/account.js',
	SRC + '/js/ctrl/analytics.js',
	SRC + '/js/ctrl/bank.js',
	SRC + '/js/ctrl/booking.js',
	SRC + '/js/ctrl/dashboard.js',
	SRC + '/js/ctrl/enquiry.js',
	SRC + '/js/ctrl/help.js',
	SRC + '/js/ctrl/payment.js',
	SRC + '/js/ctrl/promotion.js',
	SRC + '/js/ctrl/scooter.js',
	SRC + '/js/ctrl/tracking.js',
	SRC + '/js/ctrl/accountPromo.js',
	SRC + '/js/filters.js',
	SRC + '/js/services.js',
	SRC + '/js/dao.js',
	SRC + '/js/authapp.js',
	SRC + '/js/authCtrl/changePassword.js',
	SRC + '/js/authCtrl/forgetPassword.js',
	SRC + '/js/authCtrl/login.js',
	SRC + '/js/authCtrl/register.js'

];

gulp.task('build-js', function() {
	return gulp.src(JAVASCRIPTS)
	.pipe(concat('main.js'))
	.pipe(gulp.dest(DEST + '/js'));
});


var INJECTRES = [
	DEST + '/lib/roboto-fontface/css/roboto/roboto-fontface.css',
	DEST + '/lib/font-awesome/css/font-awesome.min.css',
	DEST + '/lib/moment/min/moment.min.js',
	DEST + '/lib/angular/angular.min.js',
	DEST + '/lib/angular-route/angular-route.min.js',
	DEST + '/lib/angular-aria/angular-aria.min.js',
	DEST + '/lib/angular-animate/angular-animate.min.js',
	DEST + '/lib/angular-material/angular-material.min.css',
	DEST + '/lib/angular-material/angular-material.min.js',
	DEST + '/lib/angular-avatar/dist/angular-avatar.js',
	DEST + '/lib/lf-ng-md-file-input/dist/lf-ng-md-file-input.css',
	DEST + '/lib/lf-ng-md-file-input/dist/lf-ng-md-file-input.js',
	DEST + '/lib/ng-file-upload/dist/ng-file-upload.js',
	DEST + '/lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js',
	DEST + '/lib/angular-translate/dist/angular-translate.min.js',
	DEST + '/lib/mdPickers/dist/*',
	DEST + '/lib/ng-material-datetimepicker/dist/*',
	DEST + '/lib/chart.js/dist/Chart.min.js',
	DEST + '/lib/angular-chart.js/dist/*',
	DEST + '/css/style.css',
	DEST + '/js/main.js'
];

gulp.task('build-html', ['build-media', 'build-lib', 'build-css', 'build-js'], function() {
	console.log(INJECTRES)
	return gulp.src([SRC + '/index.html', SRC + '/auth.html', SRC + '/**/*.html'], {
		base: SRC
	})
	.pipe(inject(gulp.src(INJECTRES, {
		read: false
	})))
	.pipe(removeHtmlComments())
	.pipe(gulp.dest(DEST));
});

gulp.task('build-html-lite', function() {
	return gulp.src(SRC + '/**/*.html', {
		base: SRC
	})
	.pipe(inject(gulp.src(INJECTRES, {
		read: false
	})))
	.pipe(removeHtmlComments())
	.pipe(gulp.dest(DEST));
});

gulp.task('build', ['build-html'], function() {
	// NOTHING
});

gulp.task('live-load', function() {
	gulp.watch(SRC + '/scss/style.scss', ['build-css']); 
	gulp.watch(SRC + '/**/*.html', ['build-html-lite']);
	gulp.watch(JAVASCRIPTS, ['build-js']);
});

gulp.task('serve', ['build', 'live-load'], function() {
	return gulp.src('')
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true,
		host: 'localhost',
		port: 8089,
		open: DEST + '/index.html',
		fallback: 'auth.html'
	}));
});

gulp.task('clean', function() {
	return gulp.src(DEST, {read: false})
	.pipe(clean());
});