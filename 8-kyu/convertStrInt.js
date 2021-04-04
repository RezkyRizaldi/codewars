//* parseInt() function
const stringToNumber = (str) => parseInt(str);

//* Typecase
// const stringToNumber = (str) => Number(str);

//* Math Operator
// const stringToNumber = (str) => +str;

console.log(stringToNumber("1234"), 1234);
console.log(stringToNumber("605"), 605);
console.log(stringToNumber("1405"), 1405);
console.log(stringToNumber("-7"), -7);
