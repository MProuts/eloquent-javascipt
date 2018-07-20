module.exports = { flatten, loop, every_loop, every_some }

function flatten(arr) {
  let fn = (result, e) => result.concat(e);
  return arr.reduce(fn, []);
};

function loop(value, test_fn, update_fn, body_fn) {
  while (test_fn(value)) {
    body_fn(value);
    value = update_fn(value);
  };
};

function every_loop(arr, fn) {
  for (e in arr) {
    if (!fn(3)) {
      return false;
    }
  }
  return true;
};

function every_some(arr, fn) {
  return !arr.some(!fn);
};

