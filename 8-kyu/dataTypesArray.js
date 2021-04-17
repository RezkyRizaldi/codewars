function getLength(arr) {
  return arr.length;
}

function getFirst(arr) {
  return arr[0];
}

function getLast(arr) {
  return arr[arr.length - 1];
}

function pushElement(arr) {
  var el = 1;
  arr.push(el);

  return arr;
}

function popElement(arr) {
  arr.pop();
  return arr;
}

console.log(`Answer: ${getLength([1, 2, 3])}`, `Result: ${3}`);
console.log(`Answer: ${getFirst([1, 2, 3])}`, `Result: ${1}`);
console.log(`Answer: ${getLast([1, 2, 3])}`, `Result: ${3}`);
console.log(`Answer: ${pushElement([1, 2, 3]).length}`, `Result: ${4}`);
console.log(`Answer: ${popElement([1, 2, 3]).length}`, `Result: ${2}`);
