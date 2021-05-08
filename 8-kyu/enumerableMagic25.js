//* Array.prototype.slice()
function take(arr, n) {
  return arr.slice(0, n);
}

//* Array.prototype.filter()
const take = (arr, n) => arr.filter((e, i) => i < n);

console.log(`Answer: ${take([0, 1, 2, 3, 5, 8, 13], 3)}`, `Result: ${[0, 1, 2]}`, "should return the first 3 items");
