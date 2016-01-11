// npm install gulp gulp-mocha gulp-util
//console.log('xxx');

var gulp    = require('gulp');
var mocha   = require('gulp-mocha');

gulp.task('mocha', function() {
    return gulp.src(['test.js'],   {
            read: false
        })
        .pipe(mocha({
            reporter: 'list'
        }));
});


gulp.task('watch-mocha', function() {
    gulp.watch(['index.js', 'test.js'], ['mocha']);
 
});

gulp.task('default', ['mocha','watch-mocha']);
