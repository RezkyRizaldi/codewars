//* Basic Algorithm
function nbYear(p0, percent, aug, p) {
  //* While Statement
  // let year = 0;
  // while (p0 <= p) {
  //   p0 = p0 + (p0 * (percent / 100) + aug);
  //   year++;
  // }

  //* for Statement
  for (var year = 0; p0 < p; year++) {
    p0 = p0 * (1 + percent / 100) + aug;
  }
  return year;
}

//* ES6 Syntax (Recursive)
// const nbYear = (p0, percent, aug, p, year = 0) => (p0 >= p ? year : nbYear(p0 + (p0 * percent) / 100 + aug, percent, aug, p, year + 1));

console.log(`Answer: ${nbYear(1500, 5, 100, 5000)}`, `Result: ${15}`);
console.log(`Answer: ${nbYear(1500000, 2.5, 10000, 2000000)}`, `Result: ${10}`);
console.log(`Answer: ${nbYear(1500000, 0.25, 1000, 2000000)}`, `Result: ${94}`);
