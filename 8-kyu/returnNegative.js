//* Basic Algorithm
// function makeNegative(num) {
//   if (num > 0) {
//     -num;
//   } else {
//     num;
//   }
// }

//* Ternary Operator
function makeNegative(num) {
  return num > 0 ? -num : num;
}

//* Math method
// function makeNegative(num) {
//   return -Math.abs(num);
// }

console.log(`Answer: ${makeNegative(42)}`, `Result: ${-42}`); // Return negative if the number is positive
console.log(`Answer: ${makeNegative(-18)}`, `Result: ${-18}`); // Remains negative even the number is already negative
