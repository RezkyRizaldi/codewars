function isPalindrome(x) {
  //* Array Destructuring
  return x.toLowerCase() == [...x].reverse().join("").toLowerCase();

  //* Typecase
  // return x.toLowerCase() == Buffer(x.toLowerCase()).reverse();

  //* Regex
  // return RegExp(x, "i").test([...x].reverse``.join``);
}

console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);
