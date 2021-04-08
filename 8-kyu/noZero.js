//* While Statement
function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

//* Regex
// function noBoringZeros(n) {
//   return +`${n}`.replace(/0*$/, "");
// }

console.log(`Answer: ${noBoringZeros(1450)}`, `Result: ${145}`);
console.log(`Answer: ${noBoringZeros(960000)}`, `Result: ${96}`);
console.log(`Answer: ${noBoringZeros(1050)}`, `Result: ${105}`);
console.log(`Answer: ${noBoringZeros(-1050)}`, `Result: ${-105}`);
console.log(`Answer: ${noBoringZeros(-105)}`, `Result: ${-105}`);
console.log(`Answer: ${noBoringZeros(0)}`, `Result: ${0}`);
