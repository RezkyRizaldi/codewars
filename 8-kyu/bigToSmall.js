const bigToSmall = (arr) =>
  [].concat
    .apply([], arr)
    .sort((a, b) => b - a)
    .join(">");

console.log(
  `Answer: ${bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])}`,
  "Result: 6>5>4>3>2>1"
);
console.log(
  `Answer: ${bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ])}`,
  "Result: 6>5>4>3>2>1"
);
console.log(`Answer: ${bigToSmall([[1, 1], [1], [1, 1]])}`, "Result: 1>1>1>1>1");
