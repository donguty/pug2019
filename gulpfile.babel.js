//Constantes para el automatizador de tareas
const gulp = require("gulp")
const pug = require('gulp-pug')
const plumber = require("gulp-plumber")

const browserSync = require('browser-sync').create()


gulp.task('pug', () => {
  return gulp.src('./dev/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
})

gulp.task('default', () => {
  browserSync.init({
    server: './public'
  })
  //PUG
  gulp.watch('./dev/*.pug', gulp.series('pug')).on('change', browserSync.reload)
})