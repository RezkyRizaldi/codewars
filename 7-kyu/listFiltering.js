//* Higher Order Function
const filterList = (list) =>
  list.filter(
    (l) =>
      //* Typecase
      // Number.isInteger(l)

      //* typeof
      typeof l === "number"
  );

console.log(`Answer: ${filterList([1, 2, "a", "b"])}`, `Result: ${[1, 2]}`);
console.log(`Answer: ${filterList([1, "a", "b", 0, 15])}`, `Result: ${[1, 0, 15]}`);
console.log(`Answer: ${filterList([1, 2, "aasf", "1", "123", 123])}`, `Result: ${[1, 2, 123]}`);
console.log(`Answer: ${filterList([1, 2, "aasf", "1", "123", 123])}`, `Result: ${[1, 2, 123]}`);
