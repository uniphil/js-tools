var gulp = require('gulp');
var rjs = require('requirejs');


gulp.task('build', function(cb) {

  var rjsConfig = {
    baseUrl: 'app/scripts',
    paths: {
      'jquery': 'vendor/jquery/dist/jquery',
      'underscore': 'vendor/underscore-amd/underscore',
      'backbone': 'vendor/backbone-amd/backbone',
      'text': 'vendor/requirejs-text/text',
      'templates': '../templates'
    },
    name: 'main',
    out: 'dist/scripts/',
    optimize: "none"
  }

  rjs.optimize(rjsConfig, null,
    function(asdf) {console.log('hello?', cb)});
});


gulp.task('default', ['build']);
