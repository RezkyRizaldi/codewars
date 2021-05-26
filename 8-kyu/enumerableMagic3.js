//* Array.prototype.includes()
function include(arr, item) {
  return arr.includes(item);
}

//* Array.prototype.indexOf()
function include(arr, item) {
  return arr.indexOf(item) > -1;
}

//* Array.prototype.some()
function include(arr, item) {
  return arr.some((i) => i === item);
}

console.log(include([1, 2, 3, 4], 3), true);
console.log(include([1, 2, 4, 5], 3), false);
