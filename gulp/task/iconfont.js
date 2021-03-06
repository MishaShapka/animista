module.exports = function() {
    $.gulp.task("iconfont", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            .pipe($.iconfontcss({
                fontName: "icons",
                targetPath: '../../src/sass/partials/_iconfont.scss',
                fontPath: '../../dist/fonts/'
            }))
            .pipe($.iconfont({
                prependUnicode: false,
                fontName: "icons",
                formats: ["ttf", "eot", "svg", "woff", "woff2"],
                normalize: true,
                fontHeight: 1001
            }))
            .pipe($.gulp.dest("./dist/fonts/"))
            .pipe($.debug({"title": "iconfont"}));
    });
};