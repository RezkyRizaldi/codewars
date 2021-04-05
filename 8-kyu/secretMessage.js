function greet(name) {
  return `Hello, ${name === "Johnny" ? "my love" : name}!`;
}

console.log(`Answer: ${greet("Jim")}`, "Result: Hello, Jim!");
console.log(`Answer: ${greet("Jane")}`, "Result: Hello, Jane!");
console.log(`Answer: ${greet("Simon")}`, "Result: Hello, Simon!");
console.log(`Answer: ${greet("Johnny")}`, "Result: Hello, my love!");
