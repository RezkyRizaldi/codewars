//* Basic Algorithm
// function getMiddle(str) {
//   if (str.length % 2 === 1) {
//     return str.charAt(str.length / 2);
//   } else {
//     return str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2);
//   }
// }

//* Versi Ngaririweuh diri
// function getMiddle(str) {
//   const isOdd = str.length % 2 !== 0;
//   const mid = Math.abs(Math.ceil(str.length / 2) - 1);

//   return isOdd ? str[mid] : str.slice(mid, mid + 2);
// }

//* ES6 Syntax
// const getMiddle = (str) =>
//   str.length % 2 === 1
//     ? str.charAt(str.length / 2)
//     : str.charAt(s.length / 2 - 1) + str.charAt(s.length / 2);

//* Oneliner
// function getMiddle(str) {
//   return ([str[Math.round(str.length / 2) - 1], ''][str.length % 2] + str[Math.floor(str.length / 2)]);
// }

//* Higher Order Function
const getMiddle = (str) => str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);

console.log(`Answer: ${getMiddle("test")}`, "Result: es"); //If the value of String letter is even
console.log(`Answer: ${getMiddle("testing")}`, "Result: t"); //If the value of String letter is odd
console.log(`Answer: ${getMiddle("A")}`, "Result: A"); //If the String letter is only one
