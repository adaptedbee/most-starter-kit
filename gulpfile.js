// Подключаем gulp
var gulp = require('gulp');

// Подключаем плагины

var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');

var browserSync = require('browser-sync').create();

// Обработка HTML

// Обработка CSS
gulp.task('sass', function(){
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
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
gulp.task('scripts', function(){
  return gulp.src([
    'src/bower_components/jquery/dist/jquery.min.js',
    'src/bower_components/slick-carousel/slick/slick.min.js'
    ])
    .pipe(concat('libs.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({stream: true}));
});

// Обработка изображений
gulp.task('images', function(){
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
    .pipe(browserSync.reload({stream: true}));
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
    logPrefix: "done"
  });
});

// Настройка watch
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/img/**/*', ['images']);
});

gulp.task('default', function(){
  gulp.run('browser-sync', 'watch');
});