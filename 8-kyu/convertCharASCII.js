function getChar(c) {
  //* String.prototype.fromCharCode()
  return String.fromCharCode(c);

  //* String.prototype.fromCodePoint()
  // return String.fromCodePoint(c);
}

console.log(`Answer: ${getChar(55)}`, "Result: 7");
console.log(`Answer: ${getChar(56)}`, "Result: 8");
console.log(`Answer: ${getChar(57)}`, "Result: 9");
console.log(`Answer: ${getChar(58)}`, "Result: :");
console.log(`Answer: ${getChar(59)}`, "Result: ;");
console.log(`Answer: ${getChar(60)}`, "Result: <");
console.log(`Answer: ${getChar(61)}`, "Result: =");
console.log(`Answer: ${getChar(62)}`, "Result: >");
console.log(`Answer: ${getChar(63)}`, "Result: ?");
console.log(`Answer: ${getChar(64)}`, "Result: @");
console.log(`Answer: ${getChar(65)}`, "Result: A");
