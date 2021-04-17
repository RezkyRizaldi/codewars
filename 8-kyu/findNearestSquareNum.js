function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

console.log(`Answer: ${nearestSq(1)}`, `Result: ${1}`);
console.log(`Answer: ${nearestSq(2)}`, `Result: ${1}`);
console.log(`Answer: ${nearestSq(10)}`, `Result: ${9}`);
console.log(`Answer: ${nearestSq(111)}`, `Result: ${121}`);
console.log(`Answer: ${nearestSq(9999)}`, `Result: ${10000}`);
