//* Basic Algorithm
// function isDivideBy(num, a, b) {
//   if (num % a === 0 && num % b === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//* Array.prototype.every()
// function isDivideBy(num, a, b) {
// 	return [a, b].every(i => num && i === 0);

//   //* with Soread Operator
//   return (num, ...r) => r.every((v) => !(num % v));
// }

//* Arithmetic Operator
function isDivideBy(number, a, b) {
  // return number % a === 0 && number % b === 0;

  return (number % a) + (number % b) === 0;

  // return !(num % a || num % b);
}

console.log(isDivideBy(-12, 2, -6), true);
console.log(isDivideBy(-12, 2, -5), false);
console.log(isDivideBy(45, 1, 6), false);
console.log(isDivideBy(45, 5, 15), true);
console.log(isDivideBy(4, 1, 4), true);
console.log(isDivideBy(15, -5, 3), true);
