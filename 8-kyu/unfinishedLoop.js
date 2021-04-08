//* Basic Algorithm
// function createArray(number) {
//   let newArray = [];
//   for (let i = 1; i <= number; ++i) {
//     newArray.push(i);
//   }

//   return newArray;
// }

//* Higher Order Function
const createArray = (number) => Array(...Array(number)).map((n, i) => i + 1);

console.log(`Answer: ${createArray(1)}`, `Result: ${[1]}`);
console.log(`Answer: ${createArray(2)}`, `Result: ${[1, 2]}`);
console.log(`Answer: ${createArray(3)}`, `Result: ${[1, 2, 3]}`);
console.log(`Answer: ${createArray(4)}`, `Result: ${[1, 2, 3, 4]}`);
console.log(`Answer: ${createArray(5)}`, `Result: ${[1, 2, 3, 4, 5]}`);
