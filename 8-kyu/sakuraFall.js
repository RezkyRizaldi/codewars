function sakuraFall(v) {
  return v > 0 ? 400 / v : 0;
}

console.log(`Answer: ${sakuraFall(5)}`, `Result: ${80}`);
console.log(`Answer: ${sakuraFall(10)}`, `Result: ${40}`);
console.log(`Answer: ${sakuraFall(-1)}`, `Result: ${0}`);
