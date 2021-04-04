//* Higher Order Function
function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((n) => n[0])
    .join(".");
}

//* Regex
// const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();

console.log(`Answer: ${abbrevName("Sam Harris")}`, "Reuslt: S.H");
console.log(`Answer: ${abbrevName("Patrick Feenan")}`, "Result: P.F");
console.log(`Answer: ${abbrevName("Evan Cole")}`, "Result: E.C");
console.log(`Answer: ${abbrevName("P Favuzzi")}`, "Result: P.F");
console.log(`Answer: ${abbrevName("David Mendieta")}`, "Result: D.M");
