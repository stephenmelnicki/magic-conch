var gulp = require("gulp");
var babel = require("gulp-babel");
var eslint = require("gulp-eslint");
var rimraf = require("gulp-rimraf");

gulp.task("clean", function () {
  return gulp.src("./scripts/**/*.js", { read: false })
    .pipe(rimraf());
});

gulp.task("build", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./scripts"));
});

gulp.task("lint", function () {
  return gulp.src(["src/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("default", ["clean", "lint", "build"]);
