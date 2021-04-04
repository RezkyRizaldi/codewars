//* Basic Algorithm
// function getSum(a, b) {
//   const min = a < b ? a : b;
//   const max = a > b ? a : b;
//   let sum = 0;

//   if (a === b) return a;
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// }

//* Math method
const getSum = (a, b, result = Math.min(a, b)) => {
  //* Math.abs()
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;

  //* Math.min() and Math.max()
  // const min = Math.min(a, b);
  // const max = Math.max(a, b);
  // return ((max - min + 1) * (min + max)) / 2;

  //* Math.min() and Math.max() (Recursive)
  // return a === b ? result : getSum(Math.min(a, b) + 1, Math.max(a, b), result + (Math.min(a, b) + 1));
};

console.log(`Answer: ${getSum(0, -1)}`, `Result: ${-1}`);
console.log(`Answer: ${getSum(0, 1)}`, `Result: ${1}`);
