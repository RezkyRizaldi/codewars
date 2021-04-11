function toBinary(n) {
  //* parseInt() function
  return parseInt(n.toString(2));

  //* Typecase
  // return Number(n.toString(2));

  //* Arithmetical Operator
  // return +n.toString(2);
}

console.log(`Answer: ${toBinary(1)}`, `Result: ${1}`);
console.log(`Answer: ${toBinary(2)}`, `Result: ${10}`);
console.log(`Answer: ${toBinary(3)}`, `Result: ${11}`);
console.log(`Answer: ${toBinary(5)}`, `Result: ${101}`);
