const { watch, series, src} = require('gulp')
const webserver = require('gulp-webserver')

function servidor(cb) {
    return src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    const htmlWatcher = watch('./src/**/*.html')
    htmlWatcher.on('change', function(){
        series('appHtml')()
    });

    const cssWatcher = watch('./src/**/*.scss')
    cssWatcher.on('change', function(){
        series('appCss')()
    })
    
    const jsWatcher = watch('src/**/*.js')
    jsWatcher.on('change', function(){
        series('appJs')()
    })
    
    const imgWatcher = watch('src/assets/imgs/*.*')
    imgWatcher.on('change', function(){
        series('appImg')()
    })
        
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}