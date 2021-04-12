function elevator(left, right, call) {
  return Math.abs(left - call) < Math.abs(right - call) ? "left" : "right";

  // return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
}

console.log(`Answer: ${elevator(0, 1, 0)}`, "Result: left");
console.log(`Answer: ${elevator(0, 1, 1)}`, "Result: right");
console.log(`Answer: ${elevator(0, 1, 2)}`, "Result: right");
console.log(`Answer: ${elevator(0, 0, 0)}`, "Result: right");
console.log(`Answer: ${elevator(0, 2, 1)}`, "Result: right");
