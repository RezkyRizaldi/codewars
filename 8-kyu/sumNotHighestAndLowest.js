//* Higher Order Function
function sumArray(array) {
  if (array <= 1) return 0;
  const sortedArr = array.sort((a, b) => a - b);
  sortedArr.shift();
  sortedArr.pop();
  return sortedArr.reduce((acc, curr) => acc + curr, 0);

  //* Ternary
  // return array
  //   ? array
  //       .sort((x, y) => x - y)
  //       .slice(1, -1)
  //       .reduce((s, e) => s + e, 0)
  //   : 0;

  //* Math method
  // return array ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) : 0;
}

console.log(`Answer: ${sumArray([6, 2, 1, 8, 10])}`, `Result: ${16}`);
