const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify_js = require('gulp-uglify');
const uglify_css = require('gulp-uglifycss')

/*
 *  Slå ihop JavaScript och minifiera
 *  Spara både i src- och pub-mappen
 */
gulp.task('concatjs', function() {
    var task = gulp.src('src/js/*.js')
        .pipe(concat('site.min.js'))
        .pipe(uglify_js())
        .pipe(gulp.dest('src/js'))
        .pipe(gulp.dest('pub/js'));

    return task;
});

/*
 *  Slå ihop CSS och minifiera
 *  Spara både i src- och pub-mappen
 */
gulp.task('concatcss', function() {
    var task = gulp.src('src/css/*.css')
        .pipe(concat('site.min.css'))
        .pipe(uglify_css())
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('pub/css'));

    return task;
});

/*
 *  Kopiera över HTML-filer till pub
 */
gulp.task('copyhtml', function() {
    var task = gulp.src('src/*.html')
        .pipe(gulp.dest('pub/'));

    return task;
});

/*
 *  Övervaka filändringar
 */
gulp.task('watcher', function() {
    gulp.watch('src/js/*.js', ['concatjs']);
    gulp.watch('src/css/*.css', ['concatcss']);
    gulp.watch('src/*.html', ['copyhtml']);
});

/*
 *  Kör alla tasks som default.
 */
gulp.task('default', ['concatjs', 'concatcss', 'copyhtml', 'watcher']);