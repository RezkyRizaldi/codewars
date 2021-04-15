//* Simple
function SubtractSum(n) {
  return "apple";
}

//* Riweuh
// function SubtractSum(n) {
//   const fruits = {
//     1: "kiwi",
//     2: "pear",
//     3: "kiwi",
//     4: "banana",
//     5: "melon",
//     6: "banana",
//     7: "melon",
//     8: "pineapple",
//     9: "apple",
//     10: "pineapple",
//     11: "cucumber",
//     12: "pineapple",
//     13: "cucumber",
//     14: "orange",
//     15: "grape",
//     16: "orange",
//     17: "grape",
//     18: "apple",
//     19: "grape",
//     20: "cherry",
//     21: "pear",
//     22: "cherry",
//     23: "pear",
//     24: "kiwi",
//     25: "banana",
//     26: "kiwi",
//     27: "apple",
//     28: "melon",
//     29: "banana",
//     30: "melon",
//     31: "pineapple",
//     32: "melon",
//     33: "pineapple",
//     34: "cucumber",
//     35: "orange",
//     36: "apple",
//     37: "orange",
//     38: "grape",
//     39: "orange",
//     40: "grape",
//     41: "cherry",
//     42: "pear",
//     43: "cherry",
//     44: "pear",
//     45: "apple",
//     46: "pear",
//     47: "kiwi",
//     48: "banana",
//     49: "kiwi",
//     50: "banana",
//     51: "melon",
//     52: "pineapple",
//     53: "melon",
//     54: "apple",
//     55: "cucumber",
//     56: "pineapple",
//     57: "cucumber",
//     58: "orange",
//     59: "cucumber",
//     60: "orange",
//     61: "grape",
//     62: "cherry",
//     63: "apple",
//     63: "cherry",
//     64: "pear",
//     65: "cherry",
//     66: "pear",
//     67: "kiwi",
//     68: "pear",
//     69: "kiwi",
//     70: "banana",
//     71: "apple",
//     72: "banana",
//     73: "melon",
//     74: "pineapple",
//     75: "melon",
//     76: "pineapple",
//     77: "cucumber",
//     78: "pineapple",
//     79: "cucumber",
//     80: "apple",
//     81: "grape",
//     82: "orange",
//     83: "grape",
//     84: "cherry",
//     85: "grape",
//     86: "cherry",
//     87: "pear",
//     88: "cherry",
//     89: "apple",
//     90: "kiwi",
//     91: "banana",
//     92: "kiwi",
//     93: "banana",
//     94: "melon",
//     95: "banana",
//     96: "melon",
//     97: "pineapple",
//     98: "apple",
//     99: "pineapple",
//     100: "pineapple",
//   };

//   let number = n;
//   while (true) {
//     const str = `${number}`;
//     let sum = 0;
//     for (let i = 0; i < str.length; ++i) {
//       sum += +str[i];
//     }

//     number = number - sum;

//     if (number <= 99) {
//       break;
//     }
//   }

//   return fruits[number - 1];
// }

//* Recursive
// const SubtractSum = (n) =>
//   fruits[
//     (n -= n
//       .toString()
//       .split("")
//       .reduce((s, e) => s + +e, 0))
//   ] || SubtractSum(n);

console.log(`Answer: ${SubtractSum(10)}`, "Result: apple");
