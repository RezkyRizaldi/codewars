function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

console.log(`Answer: ${seatsInTheater(16, 11, 5, 3)}`, `Result: ${96}`);
console.log(`Answer: ${seatsInTheater(1, 1, 1, 1)}`, `Result: ${0}`);
console.log(`Answer: ${seatsInTheater(13, 6, 8, 3)}`, `Result: ${18}`);
console.log(`Answer: ${seatsInTheater(60, 100, 60, 1)}`, `Result: ${99}`);
console.log(`Answer: ${seatsInTheater(1000, 1000, 1000, 1000)}`, `Result: ${0}`);
