//* Basic Algorithm
// function find_average(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i] / array.length;
//   }
//   return sum;
// }

//* Higher Order Function
function find_average(array) {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

console.log(`Answer: ${find_average([1, 1, 1])}`, `Result: ${1}`);
console.log(`Answer: ${find_average([1, 2, 3])}`, `Result: ${2}`);
console.log(`Answer: ${find_average([1, 2, 3, 4])}`, `Result: ${2.5}`);
