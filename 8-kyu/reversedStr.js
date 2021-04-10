function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(`Answer: ${reverse("I am an expert at this")}`, "Result: this at expert an am I");
console.log(`Answer: ${reverse("This is so easy")}`, "Result: easy so is This");
console.log(`Answer: ${reverse("no one cares")}`, "Result: cares one no");
console.log(`Answer: ${reverse("")}`, "Result: ");
console.log(`Answer: ${reverse("CodeWars")}`, "Result: CodeWars");
