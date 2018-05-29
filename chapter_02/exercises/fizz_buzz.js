module.exports = fizzBuzz;

function fizzBuzz(n) {
  if      (n % 15 == 0) return  'FizzBuzz';
  else if (n % 5 == 0)  return  'Buzz';
  else                  return  'Fizz';
}
