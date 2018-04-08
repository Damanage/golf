var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    imageMin    = require('gulp-imagemin'),
    pngq        = require('imagemin-pngquant');

gulp.task('sass', () => {
    return  gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('img', ()=>{
    gulp.src('app/img/*')
    .pipe(imageMin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngq()]
    }))
    .pipe(gulp.dest('dist/img/'))
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})