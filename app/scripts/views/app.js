define(function (require) {
  var Backbone = require('backbone');

  var App = Backbone.View.extend({
    initialize: function() {
      console.log('initialized yo');
    }
  });

  return App;
});
