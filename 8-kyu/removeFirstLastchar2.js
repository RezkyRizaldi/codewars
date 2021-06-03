const array = (arr) => arr.split(",").slice(1, -1).join(" ") || null;

console.log(array(""), null);
console.log(array("1"), null);
console.log(array("1, 3"), null);
console.log(array("1, 2, 3"), "2");
