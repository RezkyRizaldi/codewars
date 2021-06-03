//* String.prototype.fromCharCode() with Regex
const isVow = (a) => a.map((n) => (String.fromCharCode(n).match(/^[aeiou]$/i) ? String.fromCharCode(n) : n));

//* Object Literal
const isVow = (a) => a.map((n) => ({ 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" }[n] || n));

console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 106, 104, 116, 113, 114, 113, 120, 106]), [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116, 113, 114, 113, 120, 106]);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);
