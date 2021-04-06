//* Basic Algorithm
// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

//* Switch Case Statement
// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   switch (true) {
//     case bmi <= 18.5:
//       return "Underweight";
//     case bmi <= 25.0:
//       return "Normal";
//     case bmi <= 30:
//       return "Overweight";
//     default:
//       return "Obese";
//   }
// }

//* Ternary Operator
function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);

  return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

console.log(`Answer: ${bmi(80, 1.8)}`, "Result: Normal");
