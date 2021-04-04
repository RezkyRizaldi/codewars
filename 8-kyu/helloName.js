//* Basic Algorithm
// function helloName(name) {
// 	if (!name) {
// 		return 'Hello, World!';
// 	}

// 	// return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
// 	// return `Hello, ${name.trim().toLowerCase().replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))}!`;
// 	return `Hello, ${name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()}!`;
// }

//* ES6 Syntax
const helloName = (name) => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`;

console.log(`Answer: ${helloName("Rezky")}`, "Result: Hello, Rezky!"); //If there any name
console.log(`Answer: ${helloName("rezky")}`, "Result: Hello, Rezky!"); //If first letter of name isn't captalized
console.log(`Answer: ${helloName("ReZkY")}`, "Result: Hello, Rezky!"); //If any letter of name are captalized
console.log(`Answer: ${helloName("")}`, "Result: Hello, World!"); //if name isn't inputed
console.log(`Answer: ${helloName()}`, "Result: Hello, World!"); //If there not any name
