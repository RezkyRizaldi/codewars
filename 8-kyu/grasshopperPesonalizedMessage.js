function greet(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

console.log(`Answer: ${greet("Daniel", "Daniel")}`, "Result: Hello boss");
console.log(`Answer: ${greet("Greg", "Daniel")}`, "Result: Hello guest");
