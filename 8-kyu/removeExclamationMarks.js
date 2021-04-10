function remove(s) {
  //* String.prototype.charAt()
  // return s.charAt(s.length - 1) === "!" ? s.slice(0, -1) : s;

  //* String.prototype.endsWith()
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

//* Regex
// function remove(s) {
//   return s.replace(/!$/, "");
// }

console.log(`Answer: ${remove("Hi!")}`, "Result: Hi");
console.log(`Answer: ${remove("Hi!!!")}`, "Result: Hi!!");
console.log(`Answer: ${remove("!Hi")}`, "Result: !Hi");
console.log(`Answer: ${remove("!Hi!")}`, "Result: !Hi");
console.log(`Answer: ${remove("Hi! Hi!")}`, "Result: Hi! Hi");
console.log(`Answer: ${remove("Hi")}`, "Result: Hi");
