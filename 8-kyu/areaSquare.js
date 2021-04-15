//* Number.toFixed()
function squareArea(A) {
  return +(((2 * A) / 3.1416) ** 2).toFixed(2);
}

//* Math method
// function squareArea(A) {
//   return Math.round(Math.pow((A * 2) / Math.PI, 2) * 100) / 100;
// }

console.log(`Answer: ${squareArea(2)}`, `Result: ${1.62}`);
console.log(`Answer: ${squareArea(0)}`, `Result: ${0}`);
console.log(`Answer: ${squareArea(14.05)}`, `Result: ${80}`);
