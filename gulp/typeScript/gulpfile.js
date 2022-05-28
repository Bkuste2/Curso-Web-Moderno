const { series, dest } = require('gulp');
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function transformacaoTs(cb){
    tsProject.src()
        .pipe(tsProject())
        // .pipe(babel({
        //     comments: false,
        //     presets:["env"]
        // }))
        // .pipe(uglify())
        // .pipe(concat('app.min.js'))
        .pipe(dest('build'))
    return cb() 
}

exports.default = series(transformacaoTs) 