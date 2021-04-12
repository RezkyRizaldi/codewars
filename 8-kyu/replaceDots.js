function replaceDots(str) {
  //* Regex
  return str.replace(/\./g, "-");

  //* String.prototype.split() & Array.prototype.join()
  // return str.split(".").join("-");
}

console.log(`Answer: ${replaceDots("one.two.three")}`, "Result: one-two-three", "Sorry, try again :-(");
