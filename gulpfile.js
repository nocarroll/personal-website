const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

// Serve ./dist using browser-sync & watch scss + html for changes
gulp.task('serve', ['sass', 'copy:html', 'copy:assets'], function() {

    bs.init({
        server: './dist'
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html').on('change', function(){
        gulp.run('copy:html');
        gulp.run('copy:assets');
        bs.reload();
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(bs.stream());
});

gulp.task('copy:html', function () {
    gulp.src('src/index.html')
            .pipe(gulp.dest('dist/'));
});

gulp.task('copy:assets', function () {
    gulp.src('src/assets/**/*')
            .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['serve']);
gulp.task('build', ['sass', 'copy:html', 'copy:assets']);