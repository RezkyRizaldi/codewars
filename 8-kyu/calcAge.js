// function calculateAge(a, b) {
//   const gap = Math.max(a, b) - Math.min(a, b);
//   let str;

//   if (gap > 1) {
//     str = "years";
//   } else {
//     str = "year";
//   }

//   if (a < b) {
//     return `You are ${gap} ${str} old.`;
//   } else if (a > b) {
//     return `You will be born in ${gap} ${str}.`;
//   } else {
//     return `You were born this very ${str}!`;
//   }
// }

function calculateAge(a, b) {
  const gap = Math.max(a, b) - Math.min(a, b);
  let str;

  gap > 1 ? (str = "years") : (str = "year");

  return `You ${a < b ? `are ${gap} ${str} old.` : a > b ? `will be born in ${gap} ${str}.` : `were born this very ${str}`}`;
}

console.log(`Answer: ${calculateAge(2012, 2016)}`, "Result: You are 4 years old.");
console.log(`Answer: ${calculateAge(1989, 2016)}`, "Result: You are 27 years old.");
console.log(`Answer: ${calculateAge(2000, 2090)}`, "Result: You are 90 years old.");
console.log(`Answer: ${calculateAge(2000, 1990)}`, "Result: You will be born in 10 years.");
console.log(`Answer: ${calculateAge(3400, 3400)}`, "Result: You were born this very year!");
console.log(`Answer: ${calculateAge(900, 2900)}`, "Result: You are 2000 years old.");
console.log(`Answer: ${calculateAge(2010, 1990)}`, "Result: You will be born in 20 years.");
console.log(`Answer: ${calculateAge(2010, 1500)}`, "Result: You will be born in 510 years.");
console.log(`Answer: ${calculateAge(2011, 2012)}`, "Result: You are 1 year old.");
console.log(`Answer: ${calculateAge(2000, 1999)}`, "Result: You will be born in 1 year.");
