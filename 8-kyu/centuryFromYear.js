//* Basic Algorithm
// function century(year) {
//     var century = 0;

//     for (var i = 0; i < year; i++) {
//         if (i % 100 == 0) {
//             century++;
//         }
//     }
//     return century;
// }

//* parseInt() function
// const century = (year) => (year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1);

// * Math method
const century = (year) => Math.ceil(year / 100);

console.log(`Answer: ${century(1705)}`, `Result: ${18}`); // If year has exceeded the value of hundreds, +1 century
console.log(`Answer: ${century(1900)}`, `Result: ${19}`); // If year doesn't exceed the value of hundreds
console.log(`Answer: ${century(1601)}`, `Result: ${17}`); // If year has exceeded the value of hundreds, +1 century
console.log(`Answer: ${century(2000)}`, `Result: ${20}`); // If year doesn't exceed the value of hundreds
console.log(`Answer: ${century(89)}`, `Result: ${1}`); // If year hasn't exceeded the value of hundreds, =1 century