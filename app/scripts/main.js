define(function (require) {
  var $          = require('jquery');
  var someModule = require('some-module');

  var thing = $('#thing');
  someModule.invert(thing);

});
