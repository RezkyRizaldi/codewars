//* Basic Algorithm
const summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

//* Presedence Operator
// const summation = function (num) {
//   return (num * (num + 1)) / 2;
// };

//* ES6 Syntax
// const summation = (num) => (num * (num + 1)) / 2;

//* Recursive Function
// const summation = function f(num) {
//   return num ? num + f(num - 1) : 0;
// };

console.log(`Answer: ${summation(2)}`, `Result: ${3}`); // 1 + 2 = 3
console.log(`Answer: ${summation(8)}`, `Result: ${36}`); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
