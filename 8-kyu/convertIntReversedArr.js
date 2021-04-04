//* Basic Algorithm
// function digitize(n) {
//     n = `${n}`.split("").reverse();
//     let temp = [];
//     for (let i = 0; i < n.length; i++) {
//         temp.push(+n[i]);
//     }
//     return temp;
// }

//* Higher Order Function
// function digitize(n) {
//     return String(n).split("").map(Number).reverse();
// }

//* Typecase with reverse()
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

console.log(`Answer: ${digitize(35231)}`, `Result: ${[1, 3, 2, 5, 3]}`);