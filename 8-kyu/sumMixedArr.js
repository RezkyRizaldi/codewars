//* for,,of Statement
// function sumMix(x) {
//   let result = 0;
//   for (let n of x) {
//     result += parseInt(n);
//   }
//   return result;
// }

//* Higher Order Function
function sumMix(x) {
  //* Array.prototype.reduce() with parseInt() function
  return x.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);

  //* Array.prototype.reduce() with Math Operator
  // return x.reduce((acc, curr) => acc + (+curr), 0);

  //* Array.prototype.map() & Array.prototype.reduce()
  // return x.map((a) => +a).reduce((acc, curr) => acc + curr, 0);
}

//* eval() function
// const sumMix = (x) => eval(x.join("+"));

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
