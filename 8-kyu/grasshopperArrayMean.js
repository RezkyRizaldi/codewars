const findAverage = (nums) => nums.reduce((acc, curr) => acc + curr) / nums.length;

console.log(`Answer: ${findAverage([1])}`, `Result: ${1}`);
console.log(`Answer: ${findAverage([1, 3, 5, 7])}`, `Result: ${4}`);
