function howMuchILoveYou(nbPetals) {
  const phrases = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];

  return phrases[nbPetals % phrases.length];
}

console.log(`Answer: ${howMuchILoveYou(7)}`, "Reuslt: I love you");
console.log(`Answer: ${howMuchILoveYou(3)}`, "Result: a lot");
console.log(`Answer: ${howMuchILoveYou(6)}`, "Result: not at all");
