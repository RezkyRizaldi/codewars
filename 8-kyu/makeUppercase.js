//* toUpperCase() function
function makeUpperCase(str) {
  return str.toUpperCase();
}

//* Regex
// function makeUpperCase(str) {
//   return str.replace(/[a-z]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 32));
// }

//* Typecase
// const makeUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);

console.log(`Answer: ${makeUpperCase("hello")}`, "Result: HELLO");
