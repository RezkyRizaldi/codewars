//* Basic Algorithm
// function arr(N) {
//   let newArr = [];
//   for (let i = 0; i < N; i++) {
//     newArr.push(i);
//   }
//   return newArr;
// }

//* Typecase
function arr(N) {
  // return Array.from({ length: N }, (e, i) => i);

  return [...Array(N || 0).keys()];
}

console.log(`Answer: ${arr()}`, `Result: ${[]}`);
console.log(`Answer: ${arr(4)}`, `Result: ${[0, 1, 2, 3]}`);
