var assert      = require('assert');

var logTriangle = require('./exercises/log_triangle.js');
describe('#logTriangle()', function() {
  it('should return a triangle with the appropriate height', function() {
    expectation = "#\n##\n###\n";
    assert.equal(logTriangle(3), expectation);
  });
});

var fizzBuzz = require('./exercises/fizz_buzz.js');
describe('#fizzBuzz()', function() {
  it("should return 'Fizz' for numbers divisible by 3", function() {
    assert.equal(fizzBuzz(9), 'Fizz');
  });

  it("should return 'Buzz' for numbers divisible by 5", function() {
    assert.equal(fizzBuzz(10), 'Buzz');
  });

  it("should return 'FizzBuzz' for numbers divisible by both 3 and 5", function() {
    assert.equal(fizzBuzz(15), 'FizzBuzz');
    assert.equal(fizzBuzz(30), 'FizzBuzz');
  });
});

var { chessBoard, row } = require('./exercises/chess_board.js');

describe('#chessBoard()', function() {
  it("should print an 8 x 8 'board' with no arguments given", function() {
    let expectation = 
` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
`
    assert.equal(chessBoard(), expectation)
  });

  it("should print a 9 x 9 'board'", function() {
    let expectation = 
` # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
`
    assert.equal(chessBoard(9), expectation)
  });
});

describe('#row()', function() {
  it('returns appropriate odd row for 8 x 8 board', function() {
    assert.equal(row(1, 8), " # # # #")
  });

  it('returns appropriate even row for a 9 x 9 board', function() {
    assert.equal(row(2, 9), "# # # # #")
  });

  it('returns appropriate odd row for 1 x 1 board', function() {
    assert.equal(row(1, 1), " ")
  });
});
