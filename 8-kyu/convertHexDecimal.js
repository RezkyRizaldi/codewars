function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(`Answer: ${hexToDec("1")}`, `Result: ${1}`);
console.log(`Answer: ${hexToDec("a")}`, `Result: ${10}`);
console.log(`Answer: ${hexToDec("10")}`, `Result: ${16}`);
console.log(`Answer: ${hexToDec("FF")}`, `Result: ${255}`);
console.log(`Answer: ${hexToDec("-C")}`, `Result: ${-12}`);
