//* Basic Algorithm
// String.prototype.toAlternatingCase = function () {
//   let str = "";
//   for (let i = 0; i < this.length; ++i) {
//     if (this[i] === this[i].toLowerCase()) {
//       str += this[i].toUpperCase();
//     } else {
//       str += this[i].toLowerCase();
//     }
//   }
//   return str;
// };

//* Higher Order Function
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
    .join("");
};

//* Regex
// String.prototype.toAlternatingCase = function () {
//   // return this.replace(/./g, (match) => (/[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase()));

//   return this.replace(/[A-Za-z]/g, (s) => (s > "Z" ? s.toUpperCase() : s.toLowerCase()));
// };

console.log(`Answer: ${"hello world".toAlternatingCase()}`, "Result: HELLO WORLD");
console.log(`Answer: ${"HELLO WORLD".toAlternatingCase()}`, "Result: hello world");
console.log(`Answer: ${"hello WORLD".toAlternatingCase()}`, "Result: HELLO world");
console.log(`Answer: ${"HeLLo WoRLD".toAlternatingCase()}`, "Result: hEllO wOrld");
console.log(`Answer: ${"12345".toAlternatingCase()}`, "Result: 12345");
console.log(`Answer: ${"1a2b3c4d5e".toAlternatingCase()}`, "Result: 1A2B3C4D5E");
console.log(`Answer: ${"String.prototype.toAlternatingCase".toAlternatingCase()}`, "Result: sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log(`Answer: ${"Hello World".toAlternatingCase().toAlternatingCase()}`, "Result: Hello World");
