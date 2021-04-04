function invert(array) {
  return array.map((i) => (i === 0 ? i : -i));
  // return array.map((i) => 0 - i);
}

console.log(`Answer: ${invert([1, 2, 3, 4, 5])}`, `Result: ${[-1, -2, -3, -4, -5]}`);
console.log(`Answer: ${invert([1, -2, 3, -4, 5])}`, `Result: ${[-1, 2, -3, 4, -5]}`);
console.log(`Answer: ${invert([])}`, `Result: ${[]}`);
console.log(`Answer: ${invert([0])}`, `Result: ${[0]}`);
