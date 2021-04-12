var Ball = function (ballType) {
  // return typeof ballType === "string" ? (this.ballType = ballType) : (this.ballType = "regular");

  return (this.ballType = ballType || "regular");
};

console.log(`Answer: ${new Ball().ballType}`, "Result: regular");
console.log(`Answer: ${new Ball("super").ballType}`, "Reusult: super");
