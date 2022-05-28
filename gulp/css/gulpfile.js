const { parallel, src, dest } = require('gulp')
const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return(
        src('./src/sass/index.scss')
            .pipe(sass())
            .pipe(uglifycss())
            .pipe(concat('estilo.min.css'))
            .pipe(dest('build/css'))
    )
}

function copiarHTML(){
    return(
        src('src/**/*.html')
            .pipe(dest('build'))
    )
}

exports.default = parallel(transformacaoCSS, copiarHTML)