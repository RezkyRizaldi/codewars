//* Basic Algorithm
// function findLongest(str) {
//   let spl = str.split(" ");
//   let longest = 0;

//   for (let i = 0; i < spl.length; ++1) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//   }

//   return longest;
// }

//* Higher Order Function
function findLongest(str) {
  //* Array.prototype.sort()
  // return str
  //   .split(" ")
  //   .map((s) => s.length)
  //   .sort((a, b) => b - a)[0];

  //* Math method
  return Math.max(...str.split(" ").map((s) => s.length));
}

console.log(`Answer: ${findLongest("The quick white fox jumped around the massive dog")}`, `Result: ${7}`);
console.log(`Answer: ${findLongest("Take me to tinseltown with you")}`, `Result: ${10}`);
console.log(`Answer: ${findLongest("Sausage chops")}`, `Result: ${7}`);
console.log(`Answer: ${findLongest("Wind your body and wiggle your belly")}`, `Result: ${6}`);
console.log(`Answer: ${findLongest("Lets all go on holiday")}`, `Result: ${7}`);
