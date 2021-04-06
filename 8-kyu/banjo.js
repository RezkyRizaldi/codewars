//* Basic Algorithm
function areYouPlayingBanjo(name) {
  //* Indexing Array Element
  // return `${name}${name[0].toLowerCase() === "r" ? " plays" : " does not play"} banjo`;

  //* String.prototype.charAt()
  return `${name}${name.charAt(0).toLowerCase() === "r" ? " plays" : " does not play"} banjo`;
}

//* Regex
// function areYouPlayingBanjo(name) {
//* test()
// return `${name}${/^r/i.test(name) ? " plays" : " does not play"} banjo`;

//* match()
// return `${name}${name.match(/^r/i) ? " plays" : " does not play"} banjo`;
// }

console.log(`Answer: ${areYouPlayingBanjo("Adam")}`, "Result: Adam does not play banjo");
console.log(`Answer: ${areYouPlayingBanjo("Paul")}`, "Result: Paul does not play banjo");
console.log(`Answer: ${areYouPlayingBanjo("Ringo")}`, "Result: Ringo plays banjo");
console.log(`Answer: ${areYouPlayingBanjo("bravo")}`, "Result: bravo does not play banjo");
console.log(`Answer: ${areYouPlayingBanjo("rolf")}`, "Result: rolf plays banjo");
