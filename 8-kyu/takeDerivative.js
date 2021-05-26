const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`;

console.log(`Answer: ${derive(7, 8)}`, "Result: 56x^7");
console.log(`Answer: ${derive(5, 9)}`, "Result: 45x^8");
