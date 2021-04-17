//* Object Literal
const calculateTip = (amount, rating) => {
  const Tips = {
    terrible: 0.0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };

  rating = rating.toLowerCase();

  return rating in Tips ? Math.ceil(Tips[rating] * amount) : "Rating not recognised";
};

//* Array.prototype.indexOf()
// function calculateTip(amount, rating) {
//   const arr = ["terrible", "poor", "good", "great", "excellent"].indexOf(rating.toLowerCase());

//   return arr === -1 ? "Rating not recognised" : Math.ceil(arr * amount * 0.05);
// }

console.log(`Answer: ${calculateTip(20, "Excellent")}`, `Result: ${4}`);
console.log(`Answer: ${calculateTip(26.95, "good")}`, `Result: ${3}`);
