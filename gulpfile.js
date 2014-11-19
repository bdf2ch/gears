var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');


// Конкатенация и минификация файлов
gulp.task('minify', function () {
    gulp.src('platform/modules/*.js')
        .pipe(concat('source.js'))
        .pipe(gulp.dest('build/source.js'))
        .pipe(rename('source.min.js'))
        .pipe(gulp.dest('build/source.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//var watcher = gulp.watch('platform/modules/*.js', ['minify']);
//watcher.on('change', function(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});
