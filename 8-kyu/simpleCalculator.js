//* Array.prototype.includes()
// function calculator(a, b, sign) {
//   !isNaN(a) && !isNaN(b) && ["+", "-", "*", "/", "%"].includes(sign) ? eval(a + sign + b) : "unknown value";
// }

//* Try-catch Block
const calculator = (a, b, sign) => {
  try {
    return eval(`${a} ${sign} ${b}`);
  } catch (err) {
    return "unknown value";
  }
};

console.log(`Answer: ${calculator(1, 2, "+")}`, `Result: ${3}`, "calculate");
console.log(`Answer: ${calculator(1, 2, "-")}`, `Result: ${-1}`, "calculate");
console.log(`Answer: ${calculator(3, 5, "*")}`, `Result: ${15}`, "calculate");
console.log(`Answer: ${calculator(6, 2, "/")}`, `Result: ${3}`, "calculate");
console.log(`Answer: ${calculator(6, 2, "$")}`, "Result: unknown value", "calculate");
console.log(`Answer: ${calculator(6, "h", "*")}`, "Result: unknown value", "calculate");
