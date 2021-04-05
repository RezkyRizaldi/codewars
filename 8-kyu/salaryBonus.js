function bonusTime(salary, bonus) {
  return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
}

console.log(`Answer: ${bonusTime(10000, true)}`, "Result: £100000");
console.log(`Answer: ${bonusTime(25000, true)}`, "Result: £250000");
console.log(`Answer: ${bonusTime(10000, false)}`, "Result: £10000");
console.log(`Answer: ${bonusTime(60000, false)}`, "Result: £60000");
console.log(`Answer: ${bonusTime(2, true)}`, "Result: £20");
console.log(`Answer: ${bonusTime(78, false)}`, "Result: £78");
console.log(`Answer: ${bonusTime(67890, true)}`, "Result: £678900");
