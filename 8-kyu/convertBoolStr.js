//* Basic Algorithm
// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

//* Ternary Operator
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true), "Yes");
console.log(boolToWord(false), "No");
