var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-clean-css');
var minifyJs = require('gulp-uglify');
var trimCss = require('gulp-uncss');

gulp.task('css', function () {
    return gulp.src([
        'vendor/fontawesome/css/font-awesome.css',
        'vendor/bootstrap/bootstrap.css',
        'vendor/owlcarousel/owl.carousel.css',
        'vendor/owlcarousel/owl.theme.css',
        'vendor/magnific-popup/magnific-popup.css',
        'css/theme.css',
        'css/theme-elements.css',
        'css/theme-blog.css',
        'css/theme-shop.css',
        'css/theme-animate.css',
        'vendor/rs-plugin/css/settings.css',
        'vendor/circle-flip-slideshow/css/component.css',
        'css/skins/default.css',
        'css/custom.css'
        ])
        .pipe(concatCss('style.css'))
        .pipe(trimCss({
            html: ['index.html']
        }))
        //.pipe(minifyCss({keepSpecialComments: 0}))
        .pipe(gulp.dest('css'));
});


gulp.task('js', function () {
    return gulp.src([
        'vendor/modernizr/modernizr.js',
        'vendor/jquery/jquery.js',
        'vendor/jquery.appear/jquery.appear.js',
        'vendor/jquery.easing/jquery.easing.js',
        'vendor/jquery-cookie/jquery-cookie.js',
        'vendor/bootstrap/bootstrap.js',
        'vendor/common/common.js',
        'vendor/jquery.stellar/jquery.stellar.js',
        'vendor/isotope/jquery.isotope.js',
        'vendor/owlcarousel/owl.carousel.js',
        'vendor/jflickrfeed/jflickrfeed.js',
        'vendor/magnific-popup/jquery.magnific-popup.js',
        'vendor/vide/vide.js',
        'js/theme.js',
        'vendor/rs-plugin/js/jquery.themepunch.tools.min.js',
        'vendor/rs-plugin/js/jquery.themepunch.revolution.min.js',
        'vendor/circle-flip-slideshow/js/jquery.flipshow.js',
        'js/views/view.home.js',
        'js/views/view.contact.js',
        'js/custom.js',
        'js/theme.init.js'
        ])
        .pipe(concat('script.js'))
        //.pipe(minifyJs())
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['css','js']);
