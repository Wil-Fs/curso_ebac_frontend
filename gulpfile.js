const { series, watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlClean = require('gulp-htmlclean');

function buildStyle(){
    return gulp.src('./source/style/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/style/'));
}

function buildJs(){
    return gulp.src('./source/script/*')
        .pipe(uglify())
        .pipe(gulp.dest('./build/script/'));
}

function buildHtml(){
    return gulp.src('./source/index.html')
        .pipe(htmlClean())
        .pipe(gulp.dest('./build/'));
}

function imgMin() {
    return gulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/images/'));
}

exports.default = function() {
    watch('./source/style/main.scss',{ignoreInitial: false} , buildStyle);
    watch('./source/script/main.js',{ignoreInitial: false} , buildJs);
    watch('./source/index.html',{ignoreInitial: false} , series(imgMin,buildHtml));
}