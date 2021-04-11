//* Basic Algorithm
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(`Answer: ${solution("45", "1")}`, "Result: 1451");
console.log(`Answer: ${solution("13", "200")}`, "Result: 1320013");
console.log(`Answer: ${solution("Soon", "Me")}`, "Result: MeSoonMe");
console.log(`Answer: ${solution("U", "False")}`, "Result: UFalseU");
