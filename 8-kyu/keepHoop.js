function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

  // return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

console.log(`Answer: ${hoopCount(3)}`, "Result: Keep at it until you get it");
console.log(`Answer: ${hoopCount(11)}`, "Result: Great, now move on to tricks");
