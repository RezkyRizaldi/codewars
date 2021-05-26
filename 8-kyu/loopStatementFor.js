//* Basic Algorithm
function pickIt(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; ++i) {
    (arr[i] % 2 == 1 ? odd : even).push(arr[i]);
  }

  return [odd, even];
}

//* For..of Statement
function pickIt(arr) {
  for (const i of arr) {
    (i % 2 ? odd : even).push(x);
  }

  return [odd, even];
}

console.log(`Answer: ${pickIt([1, 2])}`, `Result: ${[[1], [2]]}`);
console.log(`Answer: ${pickIt([1, 2, 3])}`, `Result: ${[[1, 3], [2]]}`);
console.log(`Answer: ${pickIt([3, 2, 1])}`, `Result: ${[[3, 1], [2]]}`);
console.log(`Answer: ${pickIt([10, 20, 30])}`, `Result: ${[[], [10, 20, 30]]}`);
console.log(`Answer: ${pickIt([11, 21, 31])}`, `Result: ${[[11, 21, 31], []]}`);
console.log(
  `Answer: ${pickIt([8, 1, 5, 4, 6, 1, 1])}`,
  `Result: ${[
    [1, 5, 1, 1],
    [8, 4, 6],
  ]}`
);
