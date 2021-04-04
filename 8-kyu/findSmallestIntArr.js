//* Higher Order Function
// function findSmallestInt(args) {
//     return args.sort((a, b) => a - b)[0];

//     // return args.reduce(function(prev, curr) {
//     //     return prev < curr ? prev : curr;
//     // });
// }

//* Math method
function findSmallestInt(args) {
    return Math.min(...args);

    // return Math.min.apply(null, args);
}

console.log(`Answer: ${findSmallestInt([78, 56, 232])}`, `Result: ${56}`);
console.log(`Answer: ${findSmallestInt([10, 98, 102])}`, `Result: ${10}`);
console.log(`Answer: ${findSmallestInt([30, 0, -2])}`, `Result: ${-2}`);