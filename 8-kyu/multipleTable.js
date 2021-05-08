//* Basic Algorithm
const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};

//* Higher Order Function
const multiTable = (number) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => `${i} * ${number} = ${i * number}`).join("\n");

//* with Typecase
const multiTable = (number) => [...Array(10)].map((e, i) => `${i + 1} * ${number} = ${number * i + n}`).join("\n");

console.log(`Answer: ${multiTable(5)}`, "Result: 1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50");
console.log(`Answer: ${multiTable(1)}`, "Result: 1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10");
