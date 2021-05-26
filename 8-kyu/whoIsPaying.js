//* Array.prototype.push() with Array.prototype.slice()
function whoIsPaying(name) {
  let arr = name.split(" ");
  if (name.length <= 2) {
    return arr;
  } else {
    arr.push(name.slice(0, 2));
    return arr;
  }
}

//* Ternary
const whoIsPaying = (name) => (name.length > 2 ? [name, name.slice(0, 2)] : [name]);

//* Set Array Constructor
const whoIsPaying = (name) => [...new Set([name, name.slice(0, 2)])];

console.log(`Answer: ${whoIsPaying("Mexico")}`, `Result: ${["Mexico", "Me"]}`);
console.log(`Answer: ${whoIsPaying("Melania")}`, `Result: ${["Melania", "Me"]}`);
console.log(`Answer: ${whoIsPaying("Melissa")}`, `Result: ${["Melissa", "Me"]}`);
console.log(`Answer: ${whoIsPaying("Me")}`, `Result: ${["Me"]}`);
console.log(`Answer: ${whoIsPaying("")}`, `Result: ${[""]}`);
console.log(`Answer: ${whoIsPaying("I")}`, `Result: ${["I"]}`);
