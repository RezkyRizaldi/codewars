//* for..in Statement
// function getAverage(marks) {
//   let sum = 0;

//   for (let i in marks) sum += marks[i];

//   return parseInt(sum / marks.length);
// }

//* Higher Order Function
function getAverage(marks) {
  return Math.floor(marks.reduce((sum, i) => sum + i) / marks.length);
}

console.log(`Answer: ${getAverage([2, 2, 2, 2])}`, `Result: ${2}`);
console.log(`Answer: ${getAverage([1, 2, 3, 4, 5])}`, `Result: ${3}`);
console.log(`Answer: ${getAverage([1, 1, 1, 1, 1, 1, 1, 2])}`, `Result: ${1}`);
