// Подключаем gulp
var gulp = require('gulp');

// Подключаем плагины
var html5Lint = require('gulp-html5-lint');

var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');

var csso = require('gulp-csso');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegRecompress = require('imagemin-jpeg-recompress');

var svgSymbols = require('gulp-svg-symbols');

var notify = require("gulp-notify");

var browserSync = require('browser-sync').create();

// Обработка HTML
gulp.task('html', function() {
  return gulp.src('src/*.html')
    // .pipe(html5Lint())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({stream: true}));
});

// Обработка CSS
gulp.task('sass', function(){
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', function(err) {
      return notify().write(err);
    }))
    .pipe(stylelint({
      failAfterError: true,
      debug: true,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }).on('error', function(err) {
      return notify().write(err);
    }))
    .pipe(postcss([ autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: true
    }) ]))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream: true}));
});

// Обработка JS
gulp.task('vendor-scripts', function(){
  return gulp.src([
    'src/bower_components/jquery/dist/jquery.min.js',
    'src/bower_components/slick-carousel/slick/slick.min.js'
    ])
    .pipe(concat('libs.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('my-scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError().on('error', function(err) {
      return notify().write(err);
    }))
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.reload({stream: true}));
});

// Обработка изображений
gulp.task('images', function(){
  return gulp.src('src/img/**/*')
    .pipe(imagemin([jpegRecompress({
        quality: 'medium'
      }), pngquant()],{
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      verbose: true,
      interlaced: true
    }))
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sprite', function() {
  return gulp.src('src/img/icons/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('build/img/icons/'));
});

// Обработка шрифтов
gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts/'));
});

// LiveReload
gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './build'
    },
    tunnel: true,
    host: 'localhost',
    port: 1337,
    open: true,
    logPrefix: 'done'
  });
});

gulp.task('build', [
  'html',
  'sass',
  'my-scripts',
  'images',
  'fonts'
]);

// Настройка watch
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['my-scripts']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/fonts/**/*', ['fonts']);
});

gulp.task('default', function(){
  gulp.run('browser-sync', 'watch');
});