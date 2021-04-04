//* Barbar Mode
function DNAStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    //* If Statement
    // if (dna[i] === "A") result += "T";
    // if (dna[i] === "T") result += "A";
    // if (dna[i] === "C") result += "G";
    // if (dna[i] === "G") result += "C";

    //* Switch Case
    switch (dna[i]) {
      case "A":
        result += "T";
        break;
      case "T":
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      case "G":
        result += "C";
        break;

      default:
        break;
    }
  }
  return result;
}

//* Array Destructuring with Object Literal
// function DNAStrand(dna) {
//   return [...dna]
//     .map((v) => {
//       return {
//         A: "T",
//         T: "A",
//         C: "G",
//         G: "C",
//       }[v];
//     })
//     .join("");
// }

//* Regex with Nested Ternary
// function DNAStrand(dna) {
//   return dna.replace(/[TACG]/g, (x) => {
//     return x === "A" ? "T" : x === "T" ? "A" : x === "G" ? "C" : "G";
//   });
// }

console.log(`Answer: ${DNAStrand("AAAA")}`, "Result: TTTT");
console.log(`Answer: ${DNAStrand("ATTGC")}`, "Result: TAACG");
console.log(`Answer: ${DNAStrand("GTAT")}`, "Result: CATA");
