//* Basic Algorithm
// const countSheep = (num) => {
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };

//* Higher Order Function
const countSheep = (num) => [...Array(num).keys()].map((s) => `${s} sheep...`).join("");

console.log(`Answer: ${countSheep(1)}`, "Result: 1 sheep...");
console.log(`Answer: ${countSheep(2)}`, "Result: 1 sheep...2 sheep...");
console.log(`Answer: ${countSheep(3)}`, "Result: 1 sheep...2 sheep...3 sheep...");
