var v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  return v1 + v1;
}

function equal2() {
  return v4 - v2;
}

function equal3() {
  return v1 * v5;
}

function equal4() {
  return v4 / v5;
}

function equal5() {
  return v6 % v3;
}

console.log(`Answer: ${equal1()}`, `Result: ${100}`, "value of a+b is not equal to 100");
console.log(`Answer: ${equal2()}`, `Result: ${100}`, "value of a-b is not equal to 100");
console.log(`Answer: ${equal3()}`, `Result: ${100}`, "value of a*b is not equal to 100");
console.log(`Answer: ${equal4()}`, `Result: ${100}`, "value of a/b is not equal to 100");
console.log(`Answer: ${equal5()}`, `Result: ${100}`, "value of a%b is not equal to 100");
