//* Basic Algorithm
// function repeatStr(n, s) {
//   let temp = "";
//   for (let i = 0; i < n; i++) {
//     temp += s;
//   }
//   return temp;
// }

//* Higher Order Function
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(`Answer: ${repeatStr(6, "a")}`, "Result: aaaaaa");
console.log(`Answer: ${repeatStr(3, "i")}`, "Result: iii");
console.log(`Answer: ${repeatStr(10, "u")}`, "Result: uuuuuuuuuu");
