//* Basic Algorihtm
// function squareSum(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i] * nums[i];
//   }
//   return total;
// }

//* forEach() method
// const squareSum = (nums) => {
//   let total = 0;
//   nums.forEach((n) => {
//     total += n * n;
//   });
//   return total;
// };

//* Math method
// const squareSum = (nums) => {
//   let total = 0;
//   nums.forEach((n) => {
//     total += Math.pow(n, 2);
//   });
//   return total;
// };

//* Higher Order Function
const squareSum = (nums) => nums.reduce((acc, n) => acc + n * n);

console.log(`Answer: ${squareSum([1, 2])}`, `Result: ${5}`); // (1 * 1) + (2 * 2)
console.log(`Answer: ${squareSum([0, 3, 4, 5])}`, `Result: ${50}`); // (0 * 0) + (3 * 3) + (4 * 4) + (5 * 5)
