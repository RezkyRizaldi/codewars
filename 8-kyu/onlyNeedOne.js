//* Array.prototype.includes()
const check = (a, x) => a.includes(x);

//* Array.prototype.indexOf()
const check = (a, x) => a.indexOf(x) >= 0;

//* Array.prototype.some()
const check = (a, x) => a.some((v) => v == x);

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);
