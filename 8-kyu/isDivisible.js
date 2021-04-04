//* ES6 Syntax
// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

//* Typecase
// const isDivisible = (n, x, y) => !Boolean((n % x) + (n % y));

//* Sakti
const isDivisible = (n, x, y) => !(n % x || n % y);

console.log(`Answer: ${isDivisible(3, 3, 4)}`, `Result: ${false}`);
console.log(`Answer: ${isDivisible(12, 3, 4)}`, `Result: ${true}`);
console.log(`Answer: ${isDivisible(8, 3, 4)}`, `Result: ${false}`);
console.log(`Answer: ${isDivisible(48, 3, 4)}`, `Result: ${true}`);
