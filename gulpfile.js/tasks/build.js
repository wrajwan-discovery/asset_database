var gulp            = require('gulp');
gulp.task('build', ['copyScripts', 'copyClientScripts', 'copyImg', 'copyVid', 'copyFonts', 'ejs', 'iconfont', 'scripts', 'styles', 'copyData']);