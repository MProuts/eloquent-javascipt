let assert = require('assert');
let { range, sum }                        = require('./exercises/sum_of_a_range');
let { reverseArray, reverseArrayInPlace } = require('./exercises/reversing_an_array');

describe('#range()', function() {
  it('returns an array of consecutive numbers between indexes', function() {
    assert.deepEqual(range(1,3), [ 1, 2, 3 ]);
  });

  it('returns an array incremented by the step artument', function() {
    assert.deepEqual(range(1, 7, 2), [ 1, 3, 5, 7 ]);
  });
});

describe('#sum()', function() {
  it('returns sum of numbers in an array', function() {
    assert.equal(3, sum([1, 2]));
  });
});

describe('#reverseArray()', function() {
  it('returns a new array in reverse order', function() {
    let arr = [1, 2, 3];
    assert.notEqual(reverseArray(arr), arr);
    assert.deepEqual(reverseArray(arr), [3, 2, 1]);
  });
});

describe('#reverseArrayInPlace()', function() {
  it('returns the same array', function() {
    let arr = [1, 2, 3];
    assert.equal(reverseArrayInPlace(arr), arr);
  });

  it('reverses order', function() {
    let arr = [1, 2, 3];
    assert.deepEqual(reverseArrayInPlace(arr), [3, 2, 1]);
  });
});
