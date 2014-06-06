define(function() {

  function invert(thing) {
    thing.delay(500).css({"color": "white", "background": "black"});
  }

  return {
    invert: invert
  };
});