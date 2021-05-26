//* String.prototype.split() with Array.prototype.concat()
function remove(s) {
  return s.split("!").join("").concat("!");
}

//* Regex
const remove = (s) => `${s.replace(/!/g, "")}!`;

console.log(`Answer: ${remove("Hi!")}`, "Result: Hi!");
console.log(`Answer: ${remove("Hi!!!")}`, "Result: Hi!");
console.log(`Answer: ${remove("!Hi")}`, "Result: Hi!");
console.log(`Answer: ${remove("!Hi!")}`, "Result: Hi!");
console.log(`Answer: ${remove("Hi! Hi!")}`, "Result: Hi Hi!");
console.log(`Answer: ${remove("Hi")}`, "Result: Hi!");
