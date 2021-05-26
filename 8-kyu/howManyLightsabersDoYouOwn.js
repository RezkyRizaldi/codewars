function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

console.log(`Answer: ${howManyLightsabersDoYouOwn()}`, `Result: ${0}`);
console.log(`Answer: ${howManyLightsabersDoYouOwn("Adam")}`, `Result: ${0}`);
console.log(`Answer: ${howManyLightsabersDoYouOwn("Zach")}`, `Result: ${18}`);
