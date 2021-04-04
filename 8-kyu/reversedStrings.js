//* Higher Order Function
// function solution(str) {
//   return str.split("").reverse().join("");
// }

//* Spread Operator
const solution = (str) => [...str].reverse().join("");

console.log(`Answer: ${solution("hello")}`, "Result: olleh");
console.log(`Answer: ${solution("world")}`, "Result: dlrow");
