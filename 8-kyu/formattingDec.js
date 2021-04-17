//* Math method
// function twoDecimalPlaces(n) {
//   return Math.round(n * 100) / 100;
// }

//* Number.toFixed()
function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

console.log(`Answer: ${twoDecimalPlaces(4.659725356)}`, `Result: ${4.66}`, "didn't work for 4.659725356");
console.log(`Answer: ${twoDecimalPlaces(173735326.3783732637948948)}`, `Result: ${173735326.38}`, "didn't work for 173735326.3783732637948948");
console.log(`Answer: ${twoDecimalPlaces(4.653725356)}`, `Result: ${4.65}`, "didn't work for 4.653725356");
