const getNumberFromString = (s) => +s.replace(/\D/g, "");

const getNumberFromString = (s) => Number(s.match(/\d/g).join(""));

console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
