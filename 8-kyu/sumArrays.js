//* Basic Algorithm
// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) sum += arr1[i];
//   for (let i = 0; i < arr2.length; i++) sum += arr2[i];
//   return sum;
// }

//* Higher Order Function
function arrayPlusArray(arr1, arr2) {
  //* Array.prototype.concat()
  // return arr1.concat(arr2).reduce((acc, curr) => acc + curr);

  //* Array Destructuring
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

console.log(`Answer: ${arrayPlusArray([1, 2, 3], [4, 5, 6])}`, `Result: ${21}`);
console.log(`Answer: ${arrayPlusArray([-1, -2, -3], [-4, -5, -6])}`, `Result: ${-21}`);
console.log(`Answer: ${arrayPlusArray([0, 0, 0], [4, 5, 6])}`, `Result: ${15}`);
console.log(`Answer: ${arrayPlusArray([100, 200, 300], [400, 500, 600])}`, `Result: ${2100}`);
