function superSize(num) {
  //* parseInt() function
  return parseInt(n.toString().split("").sort().reverse().join(""));

  //* Typecase
  // return Number([...num.toString()].sort((a, b) => b - a).join(""));

  //* Arithmetical Operator
  // return +(num + "")
  //   .split("")
  //   .sort((a, b) => b - a)
  //   .join("");
}

console.log(`Answer: ${superSize(69)}`, `Result: ${96}`);
console.log(`Answer: ${superSize(513)}`, `Result: ${531}`);
console.log(`Answer: ${superSize(2017)}`, `Result: ${7210}`);
console.log(`Answer: ${superSize(414)}`, `Result: ${441}`);
console.log(`Answer: ${superSize(608719)}`, `Result: ${987610}`);
console.log(`Answer: ${superSize(123456789)}`, `Result: ${987654321}`);
console.log(`Answer: ${superSize(700000000001)}`, `Result: ${710000000000}`);
console.log(`Answer: ${superSize(666666)}`, `Result: ${666666}`);
console.log(`Answer: ${superSize(2)}`, `Result: ${2}`);
