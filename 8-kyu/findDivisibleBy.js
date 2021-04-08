//* Basic Algorithm
// function divisibleBy(numbers, divisor) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % divisor === 0) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// }

//* Higher Order Function
function divisibleBy(numbers, divisor) {
  //* with Comparison Operator
  return numbers.filter((n) => n % divisor == 0);

  //* with Logical Operator
  // return numbers.filter((n) => !(n % divisor));
}

console.log(`Answer: ${divisibleBy([1, 2, 3, 4, 5, 6], 2)}`, `Result: ${[2, 4, 6]}`);
console.log(`Answer: ${divisibleBy([1, 2, 3, 4, 5, 6], 3)}`, `Result: ${[3, 6]}`);
console.log(`Answer: ${divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)}`, `Result: ${[0, 4]}`);
console.log(`Answer: ${divisibleBy([0], 4)}`, `Result: ${[0]}`);
console.log(`Answer: ${divisibleBy([1, 3, 5], 2)}`, `Result: ${[]}`);
