var assert      = require('assert');
var logTriangle = require('./exercises/log_triangle.js');

describe('#logTriangle()', function() {
  it('should return a triangle with the appropriate height', function() {
    expectation = "#\n##\n###\n";
    assert.equal(logTriangle(3), expectation);
  });
});
