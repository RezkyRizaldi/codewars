function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

console.log(`Answer: ${cockroachSpeed(1.08)}`, `Result: ${30}`);
console.log(`Answer: ${cockroachSpeed(1.09)}`, `Result: ${30}`);
console.log(`Answer: ${cockroachSpeed(0)}`, `Result: ${0}`);
