//* Basic Algorithm
// function tripleTrouble(one, two, three) {
//   let result = "";
//   for (let i = 0; i < one.length; ++i) {
//     result += one[i] + two[i] + three[i];
//   }
//   return result;
// }

//* Higher Order Function
function tripleTrouble(one, two, three) {
  // return [...one].reduce((acc, curr, i) => `${acc}${one[i]}${two[i]}${three[i]}`, "");

  return [...one].map((e, i) => e + two[i] + three[i]).join("");
}

//* Regex
// function tripleTrouble(one, two, three) {
//   return one.replace(/./g, (v, i) => v + two[i] + three[i]);
// }

//* Recursive
// const tripleTrouble = (...arg) => (!arg[0][0] ? "" : arg.map((i) => i[0]).join("") + tripleTrouble(...arg.map((i) => i.slice(1))));

console.log(`Answer: ${tripleTrouble("this", "test", "lock")}`, "Result: ttlheoiscstk");
console.log(`Answer: ${tripleTrouble("aa", "bb", "cc")}`, "Result: abcabc");
console.log(`Answer: ${tripleTrouble("Bm", "aa", "tn")}`, "Result: Batman");
console.log(`Answer: ${tripleTrouble("LLh", "euo", "xtr")}`, "Result: LexLuthor");
