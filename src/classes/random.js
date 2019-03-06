var r = require('random-js');
var engine = r.engines.mt19937();
var rand = null;

var rng = {
  init: function (seed) {
    if (isNaN(seed)) {
      rand = new r(engine);
    } else {
      rand = new r(engine.seed(seed));
    }
  },
  integer: function (start, end) {
    return rand.integer(start, end);
  },
  d6: function () {
    return rand.die(6);
  },
  d10: function () {
    return rand.die(10);
  },
  twoD6: function () {
    return rand.die(6) + rand.die(6);
  },
  bool: function () {
    return rand.bool();
  },
  percentage: function () {
    return rand.integer(1, 100);
  }
}

module.exports = rng;
