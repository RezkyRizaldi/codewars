function mergeArrays(arr1, arr2) {
  //* forEach() function
  // return arr1.concat(arr2).forEach((e) => (![].includes(e) ? [].push(e).sort((a, b) => a - b) : 0));

  //* Array.prototype.filter
  // return [...arr1, ...arr2].sort((a, b) => a - b).filter((e, idx, arr) => arr.indexOf(e) === idx);

  //* Set Array Constructor
  // return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];

  //* Set Array Constructor with Array Destructuring
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}

console.log(`Answer: ${mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8]}`, "Basic tests");
console.log(`Answer: ${mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])}`, `Result: ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}`, "Basic tests");
console.log(`Answer: ${mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])}`, `Result: ${[1, 2, 3, 4, 5, 7, 9, 10, 11, 12]}`, "Basic tests");
