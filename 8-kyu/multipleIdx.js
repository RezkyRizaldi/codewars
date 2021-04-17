//* Basic Algorithm
// function multipleOfIndex(array) {
//   let newArr = [];
//   for (let i = 1; i < array.length; ++i) {
//     if (array[i] % i == 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }

//* Higher order Function
function multipleOfIndex(array) {
  return array.filter((e, i) => e % i === 0);
}

console.log(`Answer: ${multipleOfIndex([22, -6, 32, 82, 9, 25])}`, `Result: ${[-6, 32, 25]}`);
console.log(`Answer: ${multipleOfIndex([68, -1, 1, -7, 10, 10])}`, `Result: ${[-1, 10]}`);
console.log(`Answer: ${multipleOfIndex([11, -11])}`, `Result: ${[-11]}`);
console.log(`Answer: ${multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68])}`, `Result: ${[-85, 72, 0, 68]}`);
console.log(`Answer: ${multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51])}`, `Result: ${[38, -44, -99]}`);
console.log(`Answer: ${multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35])}`, `Result: ${[-49, 8, -60, 35]}`);
