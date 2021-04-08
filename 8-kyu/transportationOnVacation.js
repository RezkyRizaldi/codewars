function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

console.log(`Answer: ${rentalCarCost(1)}`, `Result: ${40}`);
console.log(`Answer: ${rentalCarCost(3)}`, `Result: ${80}`);
console.log(`Answer: ${rentalCarCost(3)}`, `Result: ${100}`);
console.log(`Answer: ${rentalCarCost(4)}`, `Result: ${140}`);
console.log(`Answer: ${rentalCarCost(5)}`, `Result: ${180}`);
console.log(`Answer: ${rentalCarCost(6)}`, `Result: ${220}`);
console.log(`Answer: ${rentalCarCost(7)}`, `Result: ${230}`);
console.log(`Answer: ${rentalCarCost(8)}`, `Result: ${270}`);
console.log(`Answer: ${rentalCarCost(9)}`, `Result: ${310}`);
console.log(`Answer: ${rentalCarCost(10)}`, `Result: ${350}`);
