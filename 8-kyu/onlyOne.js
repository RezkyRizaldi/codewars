//* Basic Algorithm
// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return true;
//     }
//   }
//   return false;
// }

//* forEach() method
// function check(a, x) {
//   let result = false;
//   a.forEach((v) => {
//     if (v == x) {
//       result = true;
//     }
//   });
//   return result;
// }

//* Higher Order Function
function check(a, x) {
  //* Array.prototype.filter()
  // return a.filter((v) => v === x).length > 0;

  //* Array.prototype.some()
  // return a.some((v) => v === x);

  //* Array.protorype.includes()
  return a.includes(x);
}

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);
