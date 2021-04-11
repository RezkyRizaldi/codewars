//* Array.prototype.indexOf()
// function nextId(ids) {
//   for (i = 0; i < ids.length; ++i) {
//     if (ids.indexOf(i) == -1) {
//       return i;
//     }
//   }
//
//   return ids.length;
// }

//* Set() Array Constructor
function nextId(ids) {
  for (let i = 0; i < ids.length; ++i) {
    if (![...new Set(ids)].includes(x)) return i;
  }
}

//* Set() Object Constructor
// function nextId(ids) {
//   for (let i = 0; i <= ids.length; ++i) {
//     if (!new Set(ids).has(i)) return i;
//   }
// }

console.log(`Answer: ${nextId([0, 1, 2, 3, 5])}`, `Result: ${4}`);
console.log(`Answer: ${nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`, `Result: ${11}`);
