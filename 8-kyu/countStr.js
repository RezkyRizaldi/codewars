//* Basic Algorithm
// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; ++i) {
//     if (str[i] == letter) ++count;
//   }

//   return count;
// }

//* Higher Order Function
function strCount(str, letter) {
  //* String.prototype.split()
  return str.split(letter).length - 1;

  //* with Array.prototype.filter()
  // return str.split("").filter((c) => c == letter).length;
}

//* Regex
// function strCount(str, letter) {
//   return str.replace(new RegExp(`[^'${letter}']`, "g"), "").length;
// }

console.log(`Answer: ${strCount("Hello", "o")}`, `Result: ${1}`);
console.log(`Answer: ${strCount("Hello", "l")}`, `Result: ${2}`);
console.log(`Answer: ${strCount("", "z")}`, `Result: ${0}`);
