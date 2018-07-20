module.exports = { reverseArray, reverseArrayInPlace };

function reverseArray(arr) {
  let newArr = [];
  arr.forEach((e) => newArr.unshift(e));
  return newArr;
};

function reverseArrayInPlace(arr) {
  let n = arr.length;
  let middle = Math.floor(n / 2)

  for(index=0; index<middle; index++) {
    let opposite_index   = n - index - 1
    let element          = arr[index];
    let opposite_element = arr[opposite_index];
    arr[opposite_index]  = element;
    arr[index] = opposite_element;
  }

  return arr;
};
