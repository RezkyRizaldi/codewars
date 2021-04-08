function otherAngle(a, b) {
  return 180 - a - b;

  // return 180 - (a + b);
}

console.log(`Answer: ${otherAngle(30, 60)}`, `Result: ${90}`);
console.log(`Answer: ${otherAngle(60, 60)}`, `Result: ${60}`);
console.log(`Answer: ${otherAngle(43, 78)}`, `Result: ${59}`);
console.log(`Answer: ${otherAngle(10, 20)}`, `Result: ${150}`);
