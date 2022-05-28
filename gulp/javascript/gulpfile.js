const {series, dest} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const padrao = (cb) =>{
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments:false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log)
        .pipe(concat('allCodes.min.js'))
        .pipe(dest('build'))

    return cb()
}

module.exports.default = series(padrao)