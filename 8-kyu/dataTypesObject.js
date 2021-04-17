function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(`Answer: ${animal({ name: "dog", legs: 4, color: "white" })}`, "Result: This white dog has 4 legs.");
console.log(`Answer: ${animal({ name: "cock", legs: 2, color: "red" })}`, "Result: This red cock has 2 legs.");
console.log(`Answer: ${animal({ name: "rabbit", legs: 4, color: "gray" })}`, "Result: This gray rabbit has 4 legs.");
