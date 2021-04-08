function squareOrSquareRoot(array) {
  //* Number.isInteger()
  // return array.map((a) => (Number.isInteger(Math.sqrt(a)) ? Math.sqrt(a) : Math.pow(a, 2)));

  //* Arithmetical Operator
  return array.map((a) => (Math.sqrt(a) % 1 === 0 ? Math.sqrt(a) : Math.pow(a, 2)));
}

let input = [5, 3, 9, 7, 2, 1];
let expected = [2, 9, 3, 49, 4, 1];
console.log(`Answer: ${squareOrSquareRoot(input)}`, `Result: ${expected}`);

input = [100, 101, 5, 5, 1, 1];
expected = [10, 10201, 25, 25, 1, 1];
console.log(`Answer: ${squareOrSquareRoot(input)}`, `Result: ${expected}`);

input = [1, 2, 3, 4, 5, 6];
expected = [1, 4, 9, 2, 25, 36];
console.log(`Answer: ${squareOrSquareRoot(input)}`, `Result: ${expected}`);
