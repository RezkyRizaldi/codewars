//* Basic Algorithm
// function points(games) {
//   let sum = 0;
//   for (let i = 0; i < games.length; ++i) {
//     if (games[i][0] > games[i][2]) sum += 3;
//     if (games[i][0] == games[i][2]) sum += 1;
//   }
//   return sum;
// }

//* Higher Order Function with Nested Ternary
function points(games) {
  return games
    .map((s) => s.split(":"))
    .map((x) => (x[0] > x[1] ? 3 : x[0] === x[1] ? 1 : 0))
    .reduce((acc, curr) => acc + curr, 0);
}

//* ES6 Syntax
// const points = (games) =>
//   games.reduce((acc, curr) => {
//     return (acc += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0);
//   }, 0);

console.log(`Answer: ${points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])}`, `Result: ${30}`);
console.log(`Answer: ${points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])}`, `Result: ${10}`);
console.log(`Answer: ${points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])}`, `Result: ${0}`);
console.log(`Answer: ${points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])}`, `Result: ${15}`);
console.log(`Answer: ${points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])}`, `Result: ${12}`);
