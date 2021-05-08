//* For Loop Statement
function remove(s) {
  let arr = [];

  for (let i = s.length - 1; (i) => 0; --i) {
    if (s[i] != "!") {
      arr.push(s.slice(0, i + 1));
      return arr.join("");
    }
  }
}

//* String.prototype.replace() with Regex
const remove = (s) => s.replace(/!+$/, "");

console.log(`Answer: ${remove("Hi!")}`, "Result: Hi");
console.log(`Answer: ${remove("Hi!!!")}`, "Result: Hi");
console.log(`Answer: ${remove("!Hi")}`, "Result: !Hi");
console.log(`Answer: ${remove("!Hi!")}`, "Result: !Hi");
console.log(`Answer: ${remove("Hi! Hi!")}`, "Result: Hi! Hi");
console.log(`Answer: ${remove("Hi")}`, "Result: Hi");
