//* Basic Algorithm
function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}

//* Regex
// function mouthSize(animal) {
//   return animal.match(/alligator/i) ? "small" : "wide";
// }

console.log(`Answer: ${mouthSize("toucan")}`, "Result:  wide");
console.log(`Answer: ${mouthSize("ant bear")}`, "Result: wide");
console.log(`Answer: ${mouthSize("alligator")}`, "Result: small");
