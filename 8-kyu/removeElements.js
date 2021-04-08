//* Basic Algorithm
// function removeEveryOther(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return newArr;

//   //* with Array.prototype.splice()
//   // for (let i = 1; i < arr.length; ++i) {
//   //   arr.splice(i, 1);
//   // }
//   // return arr;
// }

//* Higher Order Function
function removeEveryOther(arr) {
  //* with Arithmetic Operator
  return arr.filter((a, i) => i % 2 == 0);

  //* with Bitwise Operator
  // return arr.filter((a, i) => !(i & 1));
}

console.log(`Answer: ${removeEveryOther(["Hello", "Goodbye", "Hello Again"])}`, `Result: ${["Hello", "Hello Again"]}`);
console.log(`Answer: ${removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`, `Result: ${[1, 3, 5, 7, 9]}`);
console.log(`Answer: ${removeEveryOther([[1, 2]])}`, `Result: ${[[1, 2]]}`);
console.log(`Answer: ${removeEveryOther(["Goodbye"])}`, `Result: ${[{ Great: "Job" }, ["Goodbye"]]}`);
