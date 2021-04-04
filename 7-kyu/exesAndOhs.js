//* Basic Algorithm
// function XO(str) {
//   let totalX = 0;
//   let totalO = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === "x") totalX++;
//     if (str[i].toLowerCase() === "o") totalO++;
//   }

//   return totalX === totalO;
// }

//* Higher Order Function
const XO = (str) => str.split("").filter((s) => s.toLowerCase() === "x").length === str.split("").filter((s) => s.toLowerCase() === "o").length;

//* Array Destructuring
// const XO = (str) => [...str.toLowerCase()].filter((s) => s === "x").length === [...str.toLowerCase()].filter((s) => s === "o").length;

//* Regex
// function XO(str) {
//   const occur = (v) => (str.match(new RegExp(v, "gi")) || []).length;

//   return occur("x") === occur("o");
// }

console.log(`Answer: ${XO("xo")}`, `Result: ${true}`);
console.log(`Answer: ${XO("XxOo")}`, `Result: ${true}`);
console.log(`Answer: ${XO("xxxm")}`, `Result: ${false}`);
console.log(`Answer: ${XO("Oo")}`, `Result: ${false}`);
console.log(`Answer: ${XO("ooom")}`, `Result: ${false}`);
