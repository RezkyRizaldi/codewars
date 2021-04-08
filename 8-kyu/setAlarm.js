function setAlarm(employed, vacation) {
  //* Logical Operator
  return employed && !vacation;

  //* Comparison Operator
  // return employed > vacation;
}

console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");
