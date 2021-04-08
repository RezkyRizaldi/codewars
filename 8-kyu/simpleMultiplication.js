//* Basic Algorithm
// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }

function simpleMultiplication(number) {
  // return number % 2 == 0 ? number * 8 : number * 9;

  return number * (number % 2 ? 9 : 8);

  // return number * (8 + (number % 2));
}

console.log(`Answer: ${simpleMultiplication(2)}`, `Result: ${16}`, "Should return given argument times eight...");
console.log(`Answer: ${simpleMultiplication(1)}`, `Result: ${9}`, "Should return given argument times nine...");
console.log(`Answer: ${simpleMultiplication(8)}`, `Result: ${64}`, "Should return given argument times eight...");
console.log(`Answer: ${simpleMultiplication(4)}`, `Result: ${32}`, "Should return given argument times eight...");
console.log(`Answer: ${simpleMultiplication(5)}`, `Result: ${45}`, "Should return given argument times nine...");
