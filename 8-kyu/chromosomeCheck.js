//* Basic Algorithm
function chromosomeCheck(sperm) {
  if (sperm === "XX") {
    return "Congratulations! You're going to have a daughter.";
  } else if (sperm === "XY") {
    return "Congratulations! You're going to have a son.";
  } else {
    return "Congratulations! You're going to have a son.";
  }
}

//* Ternary
const chromosomeCheck = (sperm) => `Congratulations! You're going to have a ${sperm === "XY" ? "son" : "daughter"}.`;

console.log(`Answer: ${chromosomeCheck("XY")}`, "Result: Congratulations! You're going to have a son.");
console.log(`Answer: ${chromosomeCheck("XX")}`, "Result: Congratulations! You're going to have a daughter.");
