const pointsPer48 = (ppg, mpg) => (ppg == 0 || mpg == 0 ? 0 : Number(((ppg / mpg) * 48).toFixed(1)));

const pointsPer48 = (ppg, mpg) => +((ppg / mpg) * 48).toFixed(1) || 0;

console.log(pointsPer48(12, 20), 28.8);
console.log(pointsPer48(10, 10), 48.0);
console.log(pointsPer48(5, 17), 14.1);
console.log(pointsPer48(0, 0), 0);
console.log(pointsPer48(30.8, 34.7), 42.6); // Russell Westbrook 1/15/17
console.log(pointsPer48(22.9, 33.8), 32.5); // Kemba Walker 1/15/17
