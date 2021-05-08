const flip = (d, a) => a.sort((b, c) => (d == "R" ? b - c : c - b));

console.log(`Answer: ${flip("R", [3, 2, 1, 2])}`, `Result: ${[1, 2, 2, 3]}`);
console.log(`Answer: ${flip("L", [1, 4, 5, 3, 5])}`, `Result: ${[5, 5, 4, 3, 1]}`);
