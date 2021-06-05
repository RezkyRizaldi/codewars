const buildString = (...template) => `I like ${template.join(", ")}!`;

console.log(buildString("Cheese", "Milk", "Chocolate"), "I like Cheese, Milk, Chocolate!", "Return the correct String");
console.log(buildString("Cheese", "Milk"), "I like Cheese, Milk!", "Return the correct String");
console.log(buildString("Chocolate"), "I like Chocolate!", "Return the correct String");
