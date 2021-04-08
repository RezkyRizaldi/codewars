//* Math method
function index(array, n) {
  return array.length > n ? Math.pow(array[n], n) : -1;
}

//* Exponentiation Operator
// function index(array, n) {
//   return array[n] ** n || -1;
// }

console.log(`Answer: ${index([1, 2, 3, 4], 2)}`, `Result: ${9}`);
console.log(`Answer: ${index([1, 3, 10, 100], 3)}`, `Result: ${1000000}`);
console.log(`Answer: ${index([1, 2], 3)}`, `Result: ${-1}`);
console.log(`Answer: ${index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9)}`, `Result: ${1}`);
console.log(`Answer: ${index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9)}`, `Result: ${512}`);
console.log(`Answer: ${index([29, 82, 45, 10], 3)}`, `Result: ${1000}`);
console.log(`Answer: ${index([6, 31], 3)}`, `Result: ${-1}`);
console.log(`Answer: ${index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10)}`, `Result: ${-1}`);
