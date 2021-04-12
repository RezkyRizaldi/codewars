//* Basic Algorithm
// function isPalindrome(line) {
//   for (let left = 0, right = line.toString().length - 1; left < right; ) {
//     return line.charAt(left++) == line.charAt(right--);
//   }
// }

//* Higher Order Function
function isPalindrome(line) {
  //* with String.prototype.split()
  return line == line.split("").reverse().join("");

  //* with Typecase
  // return line == Array.from(line).reverse().join("");

  //* with Array Destructuring
  // return line == [...`${line}`].reverse().join(``);
}

console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
console.log(isPalindrome("."), true);
console.log(isPalindrome(".!!."), true);
