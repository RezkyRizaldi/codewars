//* Basic Algorithm
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//* Higher Order Function
// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return [...arguments].reduce((acc, curr) => acc + curr, 0);
// }

console.log(`Answer: ${goals(0, 0, 0)}`, `Result: ${0}`);
console.log(`Answer: ${goals(43, 10, 5)}`, `Result: ${58}`);
