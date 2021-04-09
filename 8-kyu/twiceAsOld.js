//* Ternary Operator
function twiceAsOld(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}

//* Math method
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

console.log(`Answer: ${twiceAsOld(36, 7)}`, `Result: ${22}`);
console.log(`Answer: ${twiceAsOld(55, 30)}`, `Result: ${5}`);
console.log(`Answer: ${twiceAsOld(42, 21)}`, `Result: ${0}`);
console.log(`Answer: ${twiceAsOld(22, 1)}`, `Result: ${20}`);
console.log(`Answer: ${twiceAsOld(29, 0)}`, `Result: ${29}`);
