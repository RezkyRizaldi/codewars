//* Basic Algorithm
// function countSheeps(arrayOfSheep) {
//   let temp = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       temp++;
//     }
//   }
//   return temp;
// }

//* forEach() method
// function countSheeps(arrayOfSheep) {
//   let temp = 0;
//   arrayOfSheep.forEach((sheep) => {
//     if (sheep) temp++;
//   });
//   return temp;
// }

//* Higher Order Function
// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((sheep) => sheep).length;

//   // return arrayOfSheep.filter((sheep) => sheep).reduce((acc, sheep) => acc + sheep);
// }

//* ES6 Syntax
// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((sheep) => sheep).length;

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;

let arr = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];

console.log(`Answer: ${countSheeps(arr)}`, `Result: ${17}`);
