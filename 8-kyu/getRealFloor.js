function getRealFloor(n) {
  return n - (n <= 0 ? 0 : n > 13 ? 2 : 1);

  // return n > 0 ? --n - (n >= 13) : n;
}

console.log(`Answer: ${getRealFloor(1)}`, `Result: ${0}`);
console.log(`Answer: ${getRealFloor(5)}`, `Result: ${4}`);
console.log(`Answer: ${getRealFloor(15)}`, `Result: ${13}`);
