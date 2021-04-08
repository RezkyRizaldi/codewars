//* Basic Algorithm
// function twoSort(s) {
//   const sortedArr = s.sort()[0];
//   const char = sortedArr[0];
//   for (let i = 1; i < sortedArr.length; i++) {
//     char += `*** ${char[i]}`;
//   }
//   return char;
// }

//* Higher Order Function
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(`Answer: ${twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])}`, "Result: b***i***t***c***o***i***n");
console.log(`Answer: ${twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])}`, "Result: a***r***e");
