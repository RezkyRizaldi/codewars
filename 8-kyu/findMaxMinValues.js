//* Math method
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

//* apply
// const min = (list) => Math.min.apply(null, list);
// const max = (list) => Math.max.apply(null, list);

//* Array.prototype.sort()
const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];

console.log(`Answer: ${min([-52, 56, 30, 29, -54, 0, -110])}`, `Result: ${-110}`);
console.log(`Answer: ${min([42, 54, 65, 87, 0])}`, `Result: ${0}`);
console.log(`Answer: ${max([4, 6, 2, 1, 9, 63, -134, 566])}`, `Result: ${566}`);
console.log(`Answer: ${max([5])}`, `Result: ${5}`);
