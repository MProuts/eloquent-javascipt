let assert = require('assert');
let { flatten, loop, every_loop, every_some } = require('./exercises');

describe('#flatten()', function() {
  it('flattens an array of arrays', function() {
    assert.deepEqual(flatten([ [ 1 ], [ 2 ] ]), [ 1, 2 ]);
  });
});

describe('#loop()', function() {
  it('works?', function() {
    let sum = 0;
    let less_than_five = (value) => value < 5;
    let increment_value = (value) => value + 1;
    let add_value_to_sum = (value) => sum += value;
    loop(1, less_than_five, increment_value, add_value_to_sum);
    assert.equal(sum, 10);
  });
});

describe('#every_loop()', function() {
  it('returns true when all elements match the criteria', function() {
    fn = (e) => e < 5;
    arr = [ 1, 2, 3 ]
    assert(every_loop(arr, fn));
  });

  it('returns false when not all elements match the criteria', function() {
    fn = (e) => e < 5;
    arr = [ 1, 2, 6 ]
  });
});

describe('#every_some()', function() {
  it('returns true when all elements match the criteria', function() {
    fn = (e) => e < 5;
    arr = [ 1, 2, 3 ]
  });

  it('returns false when not all elements match the criteria', function() {
    fn = (e) => e < 5;
    arr = [ 1, 2, 6 ]
  });
});
