//* Switch Case Statement
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

//* Higher Order Function
function getGrade(s1, s2, s3) {
  const score = [...arguments].reduce((acc, curr) => acc + curr) / arguments.length;
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}

console.log(`Answer: ${getGrade(95, 90, 93)}`, "Result: A");
console.log(`Answer: ${getGrade(100, 85, 96)}`, "Result: A");
console.log(`Answer: ${getGrade(93, 93, 94)}`, "Result: A");
console.log(`Answer: ${getGrade(70, 70, 100)}`, "Result: B");
console.log(`Answer: ${getGrade(82, 85, 87)}`, "Result: B");
console.log(`Answer: ${getGrade(84, 79, 85)}`, "Result: B");
console.log(`Answer: ${getGrade(89, 89, 90)}`, "Result: B");
console.log(`Answer: ${getGrade(70, 70, 70)}`, "Result: C");
console.log(`Answer: ${getGrade(75, 70, 79)}`, "Result: C");
console.log(`Answer: ${getGrade(60, 82, 76)}`, "Result: C");
console.log(`Answer: ${getGrade(65, 70, 59)}`, "Result: D");
console.log(`Answer: ${getGrade(66, 62, 68)}`, "Result: D");
console.log(`Answer: ${getGrade(58, 62, 70)}`, "Result: D");
console.log(`Answer: ${getGrade(44, 55, 52)}`, "Result: F");
console.log(`Answer: ${getGrade(48, 55, 52)}`, "Result: F");
console.log(`Answer: ${getGrade(58, 59, 60)}`, "Result: F");
