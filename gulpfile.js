'use strict'

const del = require('del')
const gulp = require('gulp')
const runSequence = require('run-sequence')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const distributionPath = './dist'
const sourcePath = './src'

const sassEntryPath = `${sourcePath}/styles/main.scss`
const staticPath = `${sourcePath}/**/*`

gulp.task('clean:all', () => (
  del(`${distributionPath}/**/*`)
))

gulp.task('clean:temp', () => (
  del(`${distributionPath}/styles`)
))

gulp.task('sass:compile', () => (
  gulp.src(sassEntryPath)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${distributionPath}/css`))
))

gulp.task('static:copy', () => (
  gulp.src(staticPath)
    .pipe(gulp.dest(distributionPath))
))

gulp.task('build', () => (
  runSequence(
    'clean:all',
    ['sass:compile', 'static:copy'],
    'clean:temp',
  )
))
