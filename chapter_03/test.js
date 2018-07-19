var assert      = require('assert');
var minimum = require('./exercises/minimum.js');
var isEven  = require('./exercises/recursion.js');

describe('#minimum()', function() {
  it('should return the minimum between two numbers', function() {
    assert.equal(minimum(3, 2), 2);
  });
});

describe('#isEven()', function() {
  it('should return true for 0', function() {
    assert(isEven(0));
  });

  it('should return false for 1', function() {
    assert.equal(isEven(1), false);
  });

  it('should return false for 3', function() {
    assert.equal(isEven(3), false);
  });
});
