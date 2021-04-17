//* Higher Order Function
// function sumOfDifferences(arr) {
//   return arr.sort((a, b) => b - a).reduce((total, number, index, array) => (index + 1 < array.length ? total + number - array[index + 1] : total), 0);
// }

//* Math method
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

  // return arr.length ? Math.abs(Math.max(...arr) - Math.min(...arr)) : 0;
}

console.log(`Answer: ${sumOfDifferences([1, 2, 10])}`, `Result: ${9}`);
console.log(`Answer: ${sumOfDifferences([-3, -2, -1])}`, `Result: ${2}`);
