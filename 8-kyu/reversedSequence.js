//* Basic Algorithm
function reverseSeq(n) {
  let sum = [];
  for (let i = n; i > 0; --i) {
    sum.push(i);
  }
  return sum;
}

//* Typecase
// const reverseSeq = (n) =>
//* Array Destructuring
// [...Array(n + 1).keys()].slice(1).reverse();

//* Higher Order Function
// Array(n)
//   .fill(0)
//   .map((e, i) => n - i);

console.log(`Answer: ${reverseSeq(5)}`, `Result: ${[5, 4, 3, 2, 1]}`);
