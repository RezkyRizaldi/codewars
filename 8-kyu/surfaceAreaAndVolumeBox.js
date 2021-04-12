function getSize(width, height, depth) {
  return [(depth * width + depth * height + width * height) * 2, width * height * depth];
}

console.log(`Answer: ${getSize(4, 2, 6)[1]}`, `Result: ${48}`);
console.log(`Answer: ${getSize(10, 10, 10)}`, `Result: ${[600, 1000]}`);
console.log(`Answer: ${getSize(4, 2, 6)[0]}`, `Result: ${88}`);
console.log(`Answer: ${getSize(4, 2, 6)[1]}`, `Result: ${48}`);
