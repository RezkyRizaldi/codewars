//* parseInt() function
// function litres(time) {
//     return parseInt(time / 2);
// }

//* Math method
function litres(time) {
    return Math.floor(time * 0.5);
}

//* Bitwise Operator
// const litres = (time) => ~~(time / 2);

//* Unsigned Right Shift Operator
// const litres = (time) => time >> 1;

console.log(`Answer: ${litres(2)}`, `Result: ${1}`);
console.log(`Answer: ${litres(1.4)}`, `Result: ${0}`);
console.log(`Answer: ${litres(12.3)}`, `Result: ${6}`);
console.log(`Answer: ${litres(0.82)}`, `Result: ${0}`);
console.log(`Answer: ${litres(11.8)}`, `Result: ${5}`);
console.log(`Answer: ${litres(1787)}`, `Result: ${893}`);
console.log(`Answer: ${litres(0)}`, `Result: ${0}`);