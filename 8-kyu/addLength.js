const addLength = (str) => str.split(" ").map((e) => `${e} ${e.length}`);

console.log(`Answer: ${addLength("apple ban")}`, `Result: ${["apple 5", "ban 3"]}`);
console.log(`Answer: ${addLength("you will win")}`, `Result: ${["you 3", "will 4", "win 3"]}`);
