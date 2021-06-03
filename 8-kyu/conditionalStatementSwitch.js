const howManyDays = (month) => {
  const date = new Date();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();

  switch (month) {
    default:
      return daysInMonth;
  }
};

console.log(`Answer: ${howManyDays(1)}`, `Result: ${31}`);
console.log(`Answer: ${howManyDays(2)}`, `Result: ${28}`);
console.log(`Answer: ${howManyDays(3)}`, `Result: ${31}`);
console.log(`Answer: ${howManyDays(4)}`, `Result: ${30}`);
console.log(`Answer: ${howManyDays(12)}`, `Result: ${31}`);
