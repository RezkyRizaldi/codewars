//* Basic Algorithm
// function fakeBin(x) {
//   let bin = "";
//   for (let i = 0; i < x.length; i++) {
//     if (Number(x[i]) >= 5) {
//       bin += "1";
//     } else {
//       bin += "0";
//     }
//   }
//   return bin;
// }

//* Higher Order Function
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? "0" : "1"))
    .join("");
}

//* Regex
// function fakeBin(x) {
//   // return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

//   return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
// }

//* Array Destructuring with Operators
// const fakeBin = (x) => [...x].reduce((a, b) => a + ~~(+b / 5), "");

console.log(`Answer: ${fakeBin("45385593107843568")}`, "Result: 01011110001100111");
console.log(`Answer: ${fakeBin("509321967506747")}`, "Result: 101000111101101");
console.log(`Answer: ${fakeBin("366058562030849490134388085")}`, "Result: 011011110000101010000011011");
