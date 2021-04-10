//* Basic Algortihm
// function combat(health, damage) {
//   return health < damage ? 0 : health - damage;
// }

//* Math method
function combat(health, damage) {
  return Math.max(health - damage, 0);
}

console.log(`Answer: ${combat(100, 5)}`, `Result: ${95}`);
console.log(`Answer: ${combat(92, 8)}`, `Result: ${84}`);
console.log(`Answer: ${combat(20, 30)}`, `Result: ${0}`, "Health cannot go below 0");
