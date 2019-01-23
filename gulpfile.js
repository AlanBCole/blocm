const gulp = require("gulp");
const webpack = require("webpack-stream");
const stylus = require("gulp-stylus");
const path = require("path");

const paths = {
    styles: {
        src: path.resolve(__dirname, 'src/styles/**/*.styl'),
        dest: path.resolve(__dirname, 'dist/styles/')
    },
    js: {
        src: path.resolve(__dirname, 'src/js/**/*.js'),
        dest: path.resolve(__dirname, 'dist/js/')
    }
};

gulp.task('styles', () => {
    gulp.src('./src/styles/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch:styles', () => {
    gulp.watch('src/styles/*.styl', ['styles']);
});

gulp.task('webpack', () => {
    return gulp.src('src/entry.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch:js', () => {
    gulp.watch('src/**/*.js', ['webpack']);
});

gulp.task('index.html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch:index.html', () => {
    gulp.watch('src/assets/', ['index.html']);
});

gulp.task('assets', () => {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets/'));
});

gulp.task('watch:assets', () => {
    gulp.watch('src/assets/', ['assets']);
});

gulp.task('default', [
    'styles', 
    'webpack', 
    'index.html',
    'assets', 
    'watch:styles', 
    'watch:js', 
    'watch:index.html',
    'watch:assets'
]);

