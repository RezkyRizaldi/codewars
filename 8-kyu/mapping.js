function maps(x) {
  return x.map((m) => m * 2);
}

console.log(`Answer: ${maps([1, 2, 3])}`, `Result: ${[2, 4, 6]}`);
console.log(`Answer: ${maps([4, 1, 1, 1, 4])}`, `Result: ${[8, 2, 2, 2, 8]}`);
console.log(`Answer: ${maps([2, 2, 2, 2, 2, 2])}`, `Result: ${[4, 4, 4, 4, 4, 4]}`);
