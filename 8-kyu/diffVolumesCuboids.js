function findDifference(a, b) {
  return Math.abs(a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr));
}

console.log(`Answer: ${findDifference([3, 2, 5], [1, 4, 4])}`, `Result: ${14}`);
console.log(`Answer: ${findDifference([9, 7, 2], [5, 2, 2])}`, `Result: ${106}`);
console.log(`Answer: ${findDifference([11, 2, 5], [1, 10, 8])}`, `Result: ${30}`);
console.log(`Answer: ${findDifference([4, 4, 7], [3, 9, 3])}`, `Result: ${31}`);
console.log(`Answer: ${findDifference([15, 20, 25], [10, 30, 25])}`, `Result: ${0}`);
