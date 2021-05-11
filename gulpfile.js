const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
// const pug = require('gulp-pug');
const autoprefixer = require("gulp-autoprefixer");
const replace = require("gulp-replace");

const sassTask = function () {
  return src("src/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 99 version"],
        cascade: false,
      })
    )
    .pipe(dest("dist/css", { sourcemaps: true }))
    .pipe(replace("/*!", "/*"));
};

const jsTask = function () {
  return src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(dest("dist/js"));
};

// const pugTask = function () {
//     return src('project/src/view/**/*.pug')
//     .pipe(pug({
//         pretty: true
//     }))
//     .pipe(dest('project/dist/html'))
// };

function watchTask() {
  watch(["src/js/**/*.js", "src/sass/**/*.scss"], parallel(sassTask, jsTask));
}

exports.sassTask = sassTask;
exports.jsTask = jsTask;
// exports.pugTask = pugTask;
exports.watchTask = watchTask;
exports.default = series(parallel(jsTask, sassTask), watchTask);
