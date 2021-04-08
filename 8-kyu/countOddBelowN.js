//* Arithmetic Operator
// const oddCount = (n) => (n - (n % 2)) / 2;

//* Math method
function oddCount(n) {
  //* Math.round()
  // return Math.round((n - 1) / 2);

  //* Math.floor()
  return Math.floor(n / 2);

  //* Math.trunc()
  // return Math.trunc(n / 2);
}

console.log(`Answer: ${oddCount(15)}`, `Result: ${7}`, "Oops! Wrong.");
console.log(`Answer: ${oddCount(15023)}`, `Result: ${7511}`, "Oops! Wrong.");
