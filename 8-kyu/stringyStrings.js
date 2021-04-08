//* Basic Algorithm
// function stringy(size) {
//   let result = "";
//   for (let i = 1; i <= size; ++i) {
//     result += i % 2;
//   }
//   return result;
// }

function stringy(size) {
  //* String.prototype.padStart()
  return "".padStart(size, "10");

  //* String.prototype.repeat() & String.prototype.slice()
  // return "10".repeat(size).slice(0, size);
}
