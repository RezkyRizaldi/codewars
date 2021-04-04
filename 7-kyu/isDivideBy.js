//* Basic Algorithm
// function isDivideBy(num, a, b) {
//   if (num % a === 0 && num % b === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//* ES6 Syntax
// const isDivideBy = (num, a, b) => num % a === 0 && num % b === 0;

//* every() method
// function isDivideBy(num, a, b) {
// 	return [a, b].every(i => num && i === 0);
// }

//* Oneliner
// function isDivideBy(num, a, b) {
//   return (num % a === 0 && num % b === 0);
// }

//* Advanced Oneliner
// const isDivideBy = (num, a, b) => !(num % a || num % b);

//* Spread Operator
const isDivideBy = (num, ...r) => r.every((v) => !(num % v));

console.log(`Answer: ${isDivideBy(-12, 2, -6)}`, `Result: ${true}`);
console.log(`Answer: ${isDivideBy(-12, 2, -5)}`, `Result: ${false}`);
console.log(`Answer: ${isDivideBy(45, 1, 6)}`, `Result: ${false}`);
console.log(`Answer: ${isDivideBy(45, 5, 15)}`, `Result: ${true}`);
console.log(`Answer: ${isDivideBy(4, 1, 4)}`, `Result: ${true}`);
console.log(`Answer: ${isDivideBy(15, -5, 3)}`, `Result: ${true}`);
