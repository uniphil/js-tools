define(function (require) {
  var _           = require('underscore'),
      Backbone    = require('backbone'),
      BoxTemplate = require('text!templates/box.html');

  var App = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    el: '#thing',

    template: _.template(BoxTemplate),

    render: function() {
      this.$el.html(this.template({name: prompt('your name please, ')}));
    }

  });

  return App;
});
