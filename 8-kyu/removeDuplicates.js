//* Basic Algorithm
// function distinct(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

//* Higher Order Function
// function distinct(a) {
//   //* with Array.prototype.indexOf()
//   return a.filter((e, i) => a.indexOf(e) === i);

//   //* with Array.prototype.includes()
//   // return a.reduce((acc, rec) => (!acc.includes(rec) ? [...acc, rec] : acc), []);
// }

//* Set() Object Constructor
function distinct(a) {
  return [...new Set(a)];
}

console.log(`Answer: ${distinct([1])}`, `Result: ${[1]}`);
console.log(`Answer: ${distinct([1, 2])}`, `Result: ${[1, 2]}`);
console.log(`Answer: ${distinct([1, 1, 2])}`, `Result: ${[1, 2]}`);
