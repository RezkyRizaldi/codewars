//* Switch Case Statement
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case "+":
//             return value1 + value2;
//         case "-":
//             return value1 - value2;
//         case "*":
//             return value1 * value2;
//         case "/":
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

//* eval() function
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

console.log(`Answer: ${basicOp("+", 4, 7)}`, `Result: ${11}`);
console.log(`Answer: ${basicOp("-", 15, 18)}`, `Result: ${-3}`);
console.log(`Answer: ${basicOp("*", 5, 5)}`, `Result: ${25}`);
console.log(`Answer: ${basicOp("/", 49, 7)}`, `Result: ${7}`);