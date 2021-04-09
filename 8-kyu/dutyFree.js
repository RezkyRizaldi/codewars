//* Bitwise Operator
// function dutyFree(normPrice, discount, hol) {
//   return ~~((100 * hol) / normPrice / discount);
// }

//* Math method
function dutyFree(normPrice, discount, hol) {
  return Math.trunc(hol / (normPrice * (discount / 100)));

  // return Math.floor((hol / normPrice / discount) * 100);
}

console.log(`Answer: ${dutyFree(12, 50, 1000)}`, `Result: ${166}`);
console.log(`Answer: ${dutyFree(17, 10, 500)}`, `Result: ${294}`);
console.log(`Answer: ${dutyFree(24, 35, 3000)}`, `Result: ${357}`);
