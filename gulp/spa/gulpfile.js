const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { depsCss, depsFonts } = require('./gulpTasks/deps')
const { appHtml, appCss, appImg, appJs} = require('./gulpTasks/app')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)