//* Basic Algorithm
// function hello(name) {
//   if (name) return "Hello, World!";
//   return `Hello, ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`;
// }

//* Ternary Operator
const hello = (name) => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`;

console.log(`Answer: ${hello("johN")}`, "Result: Hello, John!", "returns 'Hello, John!' when given 'johN'");
console.log(`Answer: ${hello("alice")}`, "Result: Hello, Alice!", "returns 'Hello, Alice!' when given 'alice'");
console.log(`Answer: ${hello()}`, "Result: Hello, World!", "returns 'Hello, World!' when name is not given");
console.log(`Answer: ${hello("")}`, "Result: Hello, World!", "returns 'Hello, World!' when name is an empty String");
