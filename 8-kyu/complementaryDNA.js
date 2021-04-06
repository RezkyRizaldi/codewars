//* Barbar Mode
function DNAtoRNA(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    //* If Statement
    // if (dna[i] === "T") result += "U";
    // if (dna[i] === "A") result += "A";
    // if (dna[i] === "C") result += "C";
    // if (dna[i] === "G") result += "G";

    //* Switch Case
    switch (dna[i]) {
      case "T":
        result += "U";
        break;
      case "A":
        result += "A";
        break;
      case "C":
        result += "C";
        break;
      case "G":
        result += "G";
        break;

      default:
        break;
    }
  }
  return result;
}

//* Array Destructuring with Object Literal
// function DNAtoRNA(dna) {
//   return [...dna]
//     .map((v) => {
//       return {
//         T: "U",
//         A: "A",
//         C: "C",
//         G: "G",
//       }[v];
//     })
//     .join("");
// }

//* Regex with Nested Ternary
// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

console.log(`Answer: ${DNAStrand("TTTT")}`, "Result: UUUU");
console.log(`Answer: ${DNAStrand("GTAC")}`, "Result: GTAC");
console.log(`Answer: ${DNAStrand("CATA")}`, "Result: CATA");
