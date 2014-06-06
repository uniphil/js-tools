require.config({
  baseUrl: "scripts",
  paths: {
    // external dependencies
    "jquery": "vendor/jquery/dist/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    // plugins
    "text": "vendor/requirejs-text/text",
    // local stuff
    "templates": "../templates"
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
