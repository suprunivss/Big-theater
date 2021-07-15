const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const del = require("del");
const browserSync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");

sass.compiler = require("node-sass");

gulp.task("sass", () => {
    return gulp
        .src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(
            autoprefixer(["last 15 version", "> 1%", "ie 8", "ie 7"], {
                cascade: true,
            })
        )
        .pipe(cssnano())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("assets", () => {
    return gulp.src("./src/assets/**/*").pipe(gulp.dest("./public/assets"));
});


gulp.task("html", () => {
    return gulp
        .src("./src/index.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./public/"));
});

gulp.task("clean", () => del("public/**/*"));

gulp.task("watch-scss", () => {
    gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("watch-html", () => {
    gulp.watch("./src/index.html", gulp.series("html"));
});

gulp.task("watch", gulp.parallel("watch-scss", "watch-html"));

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./public/",
        },
    });
    browserSync.watch("src/**/*").on("change", browserSync.reload);
});

gulp.task(
    "build",
    gulp.series("clean", gulp.parallel("sass", "assets", "html"))
);

gulp.task("default", gulp.series("build", gulp.parallel("watch", "serve")));
