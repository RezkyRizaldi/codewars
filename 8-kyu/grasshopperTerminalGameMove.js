function move(position, roll) {
  return position + roll * 2;
}

console.log(`Answer: ${move(0, 4)}`, `Result: ${8}`);
console.log(`Answer: ${move(3, 6)}`, `Result: ${15}`);
console.log(`Answer: ${move(2, 5)}`, `Result: ${12}`);
