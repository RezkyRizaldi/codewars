//* Higher Order Function
function correct(string) {
  return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
}

//* Regex
// function correct(string) {
//   let obj = {
//     0: "O",
//     1: "I",
//     5: "S",
//   };

//   return string.replace(/0|1|5/gi, (matched) => obj[matched]);
// }

console.log(`Answer: ${correct("L0ND0N")}`, "Result: LONDON");
console.log(`Answer: ${correct("DUBL1N")}`, "Result: DUBLIN");
console.log(`Answer: ${correct("51NGAP0RE")}`, "Result: SINGAPORE");
console.log(`Answer: ${correct("BUDAPE5T")}`, "Result: BUDAPEST");
console.log(`Answer: ${correct("PAR15")}`, "Result: PARIS");
