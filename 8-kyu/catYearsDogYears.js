const humanYearsCatYearsDogYears = (humanYears) => {
  // let years = [];
  // let catYears = 15;
  // let dogYears = 15;

  // if (humanYears == 2) {
  //   catYears = catYears + 9;
  //   dogYears = dogYears + 9;
  // } else if (humanYears > 2) {
  //   catYears = catYears + 9 + (humanYears - 2) * 4;
  //   dogYears = dogYears + 9 + (humanYears - 2) * 5;
  // }

  // years.push(humanYears, catYears, dogYears);
  // return years;

  //* Refactor
  if (humanYears == 1) return [1, 15, 15];
  if (humanYears == 2) return [2, 24, 24];
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};

console.log(`Answer: ${humanYearsCatYearsDogYears(1)}`, `Result: ${[1, 15, 15]}`);
console.log(`Answer: ${humanYearsCatYearsDogYears(2)}`, `Result: ${[2, 24, 24]}`);
console.log(`Answer: ${humanYearsCatYearsDogYears(10)}`, `Result: ${[10, 56, 64]}`);
