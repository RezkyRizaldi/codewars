//* Basic Algorithm
// function mango(quantity, price) {
//   let totalCost = 0;
//   while (quantity > 0) {
//     if (quantity > 2) {
//       quantity -= 3;
//       totalCost += 2 * price;
//     } else {
//       totalCost += price;
//       quantity -= 1;
//     }
//   }

//   return totalCost;
// }

//* Math method
function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));

  // return Math.ceil(quantity / 1.5) * price;

  // return (quantity - ((quantity / 3) ^ 0)) * price;
}

console.log(`Answer: ${mango(3, 3)}`, `Result: ${6}`);
console.log(`Answer: ${mango(9, 5)}`, `Result: ${30}`);
