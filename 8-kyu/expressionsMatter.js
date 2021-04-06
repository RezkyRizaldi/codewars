//* Maksa
// function expressionMatter(a, b, c) {
//   if (a == 1 && b == 1 && c == 1) {
//     return 3;
//   }
//   if (a != 1 && b != 1 && c != 1) {
//     return a * b * c;
//   }
//   if (a == 1 && b != 1 && c != 1) {
//     return (a + b) * c;
//   }
//   if (a != 1 && b != 1 && c == 1) {
//     return a * (b + c);
//   }
//   if (a != 1 && b == 1 && c == 1) {
//     return a * 2;
//   }
//   if (a == 1 && b == 1 && c != 1) {
//     return c * 2;
//   }
//   if (a == 1 && b != 1 && c == 1) {
//     if (a == c) {
//       return a + b + c;
//     }
//     if (a > c) {
//       return a * (b + c);
//     }
//     if (a < c) {
//       return (a + b) * c;
//     }
//   }
//   if (a != 1 && b == 1 && c != 1) {
//     if (a == c) {
//       return (a + b) * c;
//     }
//     if (a > c) {
//       return a * (b + c);
//     }
//     if (a < c) {
//       return (a + b) * c;
//     }
//   }
// }

//* Math method
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

console.log(`Answer: ${expressionMatter(2, 1, 2)}`, `Result: ${6}`);
console.log(`Answer: ${expressionMatter(2, 1, 1)}`, `Result: ${4}`);
console.log(`Answer: ${expressionMatter(1, 1, 1)}`, `Result: ${3}`);
console.log(`Answer: ${expressionMatter(1, 2, 3)}`, `Result: ${9}`);
console.log(`Answer: ${expressionMatter(1, 3, 1)}`, `Result: ${5}`);
console.log(`Answer: ${expressionMatter(2, 2, 2)}`, `Result: ${8}`);
console.log(`Answer: ${expressionMatter(5, 1, 3)}`, `Result: ${20}`);
console.log(`Answer: ${expressionMatter(3, 5, 7)}`, `Result: ${105}`);
console.log(`Answer: ${expressionMatter(5, 6, 1)}`, `Result: ${35}`);
console.log(`Answer: ${expressionMatter(1, 6, 1)}`, `Result: ${8}`);
console.log(`Answer: ${expressionMatter(2, 6, 1)}`, `Result: ${14}`);
console.log(`Answer: ${expressionMatter(6, 7, 1)}`, `Result: ${48}`);
console.log(`Answer: ${expressionMatter(2, 10, 3)}`, `Result: ${60}`);
console.log(`Answer: ${expressionMatter(1, 8, 3)}`, `Result: ${27}`);
console.log(`Answer: ${expressionMatter(9, 7, 2)}`, `Result: ${126}`);
console.log(`Answer: ${expressionMatter(1, 1, 10)}`, `Result: ${20}`);
console.log(`Answer: ${expressionMatter(9, 1, 1)}`, `Result: ${18}`);
console.log(`Answer: ${expressionMatter(10, 5, 6)}`, `Result: ${300}`);
console.log(`Answer: ${expressionMatter(1, 10, 1)}`, `Result: ${12}`);
