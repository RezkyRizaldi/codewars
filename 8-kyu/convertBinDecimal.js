//* parseInt() function
function binToDec(bin) {
  return parseInt(bin, 2);
}

//* Higher Order Function
// function binToDec(bin) {
//   //* Array.prototype.reduce()
//   // return [...bin].reverse().reduce((acc, curr, idx) => acc + curr * 2 ** idx, 0);

//   //* Array.prototype.reduce() with Bitwise Operator
//   return [...bin].reduce((acc, curr) => (acc << 1) | curr, 0);
// }

[
  ["1", 1],
  ["0", 0],
  ["1001001", 73],
].forEach(([inp, exp]) => console.log(binToDec(inp), exp));
