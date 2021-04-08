//* Basic Algorithm
// function doubleChar(str) {
//   let word = "";
//   for (let i = 0; i < str.length; ++i) {
//     word = word + str[i] + str[i];
//   }
//   return word;
// }

//* Higher Order Function
function doubleChar(str) {
  // return [...str].map((s) => s + s).join("");

  //* with String.prototype.repeat()
  return [...str].map((s) => s.repeat(2)).join("");

  //* with String.prototype.concat()
  // return [...str].map((s) => s.concat(s)).join("");
}

//* Regex
// function doubleChar(str) {
//   return str.replace(/./g, "$&$&");
// }

console.log(`Answer: ${doubleChar("abcd")}`, "Result: aabbccdd");
console.log(`Answer: ${doubleChar("Adidas")}`, "Result: AAddiiddaass");
console.log(`Answer: ${doubleChar("1337")}`, "Result: 11333377");
console.log(`Answer: ${doubleChar("illuminati")}`, "Result: iilllluummiinnaattii");
console.log(`Answer: ${doubleChar("123456")}`, "Result: 112233445566");
console.log(`Answer: ${doubleChar("%^&*(")}`, "Result: %%^^&&**((");
