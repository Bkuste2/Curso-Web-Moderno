const { src, dest, task } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const appHtml = () => {
    return (
        src('src/**/*.html')
            .pipe(htmlmin({collapseWhitespace:true}))
            .pipe(dest('build'))
    )
};

const appCss = () => {
    return (
        src('src/assets/sass/index.scss')
            .pipe(sass().on('error', e => console.log))
            .pipe(uglifycss({"uglyComments": true}))
            .pipe(concat('app.min.css'))
            .pipe(dest('build/assets/css'))
    )
};

const appJs = () => {
    return (
        src('src/assets/js/**/*.js')
            .pipe(babel({presets: ["env"]}))
            .pipe(uglify())
            .pipe(concat('app.min.js'))
            .pipe(dest('build/assets/js'))
    )
};

const appImg = () => {
    return(
        src('src/assets/imgs/**/*.*')
            .pipe(dest('build/assets/imgs'))
    )
};

task('appHtml', appHtml);
task('appCss', appCss);
task('appJs', appJs);
task('appImg', appImg);

module.exports  = {
    appHtml,
    appCss,
    appJs,
    appImg
}