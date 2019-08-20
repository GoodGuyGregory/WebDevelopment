"use strict";

var gulp = require('gulp');
// common to name the gulp modules with the module name as below
    const concat = require('gulp-concat');
    const uglify = require('gulp-uglify');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const maps = require('gulp-sourcemaps');
    const del = require('del');

    // This Task Minifies the JS to one call in the HTML scripts 
gulp.task("concatScripts", function() {
    // .src moves the items into an array and stores their locations 

    // Return will allow a value to be returned thus allowing an object or in this case
// a source to be returned to the function for the minify Scripts task to be completed next.
    return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
         'js/main.js'])
        //  leaves source attributes for errors using the maps module
         .pipe(maps.init())
        //  .pipe will move them into another location concat allows for all of the files to 
        // be placed/writte into one file
         .pipe(concat("app.js"))
        // chooses a write location for the files
         .pipe(maps.write('./'))
        //  here pipe is moving them to another location 
        //  gulp.dest lists a destination for the files to be stored at
         .pipe(gulp.dest("js"));
}); //concatScripts


// task method with a call to minifyscripts
// With the addition of the concatScripts task on the task the function requires "concatScripts"
// to be run as a dependency for the next task.
gulp.task("minifyScripts", ["concatScripts"], function() {
    // will grab files we want to minify. 
    // for this example lets minify the concatenated scripts
   return gulp.src("js/app.js")
        // uses the gulp plugin in to minify the js concatenated scripts
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        // dest will be specified with a location on development server etc...
        .pipe(gulp.dest('js'));

}); //minifyScripts

gulp.task("compileSass", function() {
    // due to global imports throughout the sass
    return gulp.src('scss/application.scss')
        // adds the maps module method to the sass compiler
        .pipe(maps.init())
        // sass method compiles the sass->css
        .pipe(sass())
        // relative path to the output directory of css
        .pipe(maps.write('./'))
        // .dest will allow specification for the css directory
        .pipe(gulp.dest('css'));
}) //compileSass

// gulp.task('watchSass', function(){
//     // watch doesn't require return 
//     // because it doesnt require dependencies for task
//     // watch only needs the destination to watch for changes
//     gulp.watch('scss/**/*.scss', ['compileSass']);
// });

// Watch Both Sass and JS for Development Pipeline 
gulp.task('watchFiles', function(){
    // watches for Sass Changes and compilesSass task is called
    gulp.watch('scss/**/*.scss', ['compileSass']);
    // watches for js changes in main.js and concats
    gulp.watch('js/main.js',['concatScripts']);
});

gulp.task('clean', function() {
    del(['dist', 'css/application.css*', 'js/app*.js*']);
});

// Creates a Single task for gulp to run
gulp.task("build", [ 'minifyScripts', 'compileSass'], function() {
    return gulp.src(["css/application.css","js/app.min.js", 'index.html',
    "img/**", "fonts/**"], { base: './'})
    // base: makes sure the structure is maintained in its current directory's locations
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

// adds 'build' task as a dependency as in convention
gulp.task("default", ['clean'], function(){
    // runs start after cleaning by default 
    gulp.start('build');
});