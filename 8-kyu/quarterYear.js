//* Ternary Operator
// const quarterOf = (month) => (month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4);

//* Math method
const quarterOf = (month) => Math.ceil(month / 3);

console.log(`Answer: ${quarterOf(3)}`, `Result: ${1}`);
console.log(`Answer: ${quarterOf(8)}`, `Result: ${3}`);
console.log(`Answer: ${quarterOf(11)}`, `Result: ${4}`);
