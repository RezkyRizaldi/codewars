//* Basic Algorithm
// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0) return [];
//   let positive = 0;
//   let negative = 0;

//   for (let i = 0, l = input.length; i < l; ++i) {
//     if (input[i] > 0) ++positive;
//     negative += input[i];
//   }

//   return [positive, negative];
// }

//* Higher Order Function
function countPositivesSumNegatives(input) {
  if (input === null || input.length <= 0) return [];
  const positives = input.filter((i) => i > 0).length;
  const negatives = input
    .filter((i) => i < 0)
    .reduce((arr, curr) => {
      return arr + curr;
    });

  return ([p, n] = [positives, negatives]);

  //* Ternary Operator
  // return input && input.length ? [input.filter((p) => p > 0).length, input.filter((n) => n < 0).reduce((a, b) => a + b, 0)] : [];
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
let expected = [10, -65];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
