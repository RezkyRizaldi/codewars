//* Basic Algorithm
// function smash(words) {
//   "use strict";
//   let smashed = "";
//   for (let i = 0; i < words.length; ++i) {
//     smashed += words[i];
//     if (i != words.length - 1) {
//       smashed += " ";
//     }
//   }
//   return smashed;
// }

//* Array.prototype.join()
function smash(words) {
  "use strict";
  return words.join(" ");
}

console.log(`Answer: ${smash(["hello"])}`, "Result: hello");
console.log(`Answer: ${smash(["hello", "world"])}`, "Result: hello world");
