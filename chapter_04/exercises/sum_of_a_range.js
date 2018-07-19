module.exports = { range, sum };

function range(n, m, step=1) {
  arr = [];
  for (i=n; i<=m; i+=step) {
    arr.push(i);
  }
  return arr;
};

function sum(arr) {
  return arr.reduce((result, e) => result + e );
};


