//* Basic Algorithm
// function past(h, m, s) {
// 	return (3600 * h + 60 * m + s) * 1000;
// }

//* Date() Function;
// function past(h, m, s) {
// 	const setTime = new Date().setHours(h, m, s);
// 	const midnight = new Date().setHours(0, 0, 0);

// 	return Math.round(setTime - midnight);
// }

//* ES6 Syntax
const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

console.log(`Answer: ${past(0, 1, 1)}`, `Result: ${61000}`);
console.log(`Answer: ${past(1, 1, 1)}`, `Result: ${3661000}`);
console.log(`Answer: ${past(0, 0, 0)}`, `Result: ${0}`);
console.log(`Answer: ${past(1, 0, 1)}`, `Result: ${3601000}`);
console.log(`Answer: ${past(1, 0, 0)}`, `Result: ${3600000}`);
