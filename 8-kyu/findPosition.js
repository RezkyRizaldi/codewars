function position(letter) {
  //* String.protorype.charCodeAt()
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;

  //* String.protorype.indexOf()
  // return `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1)}`;
}

console.log(`Answer: ${position("a")}`, "Result: Position of alphabet: 1");
console.log(`Answer: ${position("z")}`, "Result: Position of alphabet: 26");
console.log(`Answer: ${position("e")}`, "Result: Position of alphabet: 5");
