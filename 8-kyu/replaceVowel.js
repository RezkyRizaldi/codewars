//* Higher Order Function
// const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

//* Regex
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

console.log(`Answer: ${replace("Hi!")}`, "Result: H!!");
console.log(`Answer: ${replace("!Hi! Hi!")}`, "Result: !H!! H!!");
console.log(`Answer: ${replace("aeiou")}`, "Result: !!!!!");
console.log(`Answer: ${replace("ABCDE")}`, "Result: !BCD!");
