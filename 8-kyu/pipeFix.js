//* Basic Algorithm
// function pipeFix(numbers) {
//   let arr = [];
//   for (let i = numbers[0]; i <= numbers.slice(-1)[0]; ++i) {
//     arr.push(i);
//   }
//   return arr;
// }

//* Typecase
function pipeFix(numbers) {
  return Array.from({ length: numbers.pop() - numbers[0] + 1 }, (e, i) => i + numbers[0]);

  // let arr = [];
  // return Array(arr.pop() - arr[0] + 1)
  //   .fill(0)
  //   .map((e, i) => i + arr[0]);
}

console.log(`Answer: ${pipeFix([1, 2, 3, 5, 6, 8, 9])}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}`);
console.log(`Answer: ${pipeFix([1, 2, 3, 12])}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}`);
console.log(`Answer: ${pipeFix([6, 9])}`, `Result: ${[6, 7, 8, 9]}`);
console.log(`Answer: ${pipeFix([-1, 4])}`, `Result: ${[-1, 0, 1, 2, 3, 4]}`);
console.log(`Answer: ${pipeFix([1, 2, 3])}`, `Result: ${[1, 2, 3]}`);
