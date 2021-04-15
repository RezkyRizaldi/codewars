function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;

  // return str.replace(/[^a-z]/g, "").length;
}

console.log(`Answer: ${lowercaseCount("abc")}`, `Result: ${3}`);
console.log(`Answer: ${lowercaseCount("abcABC123")}`, `Result: ${3}`);
console.log(`Answer: ${lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")}`, `Result: ${3}`);
console.log(`Answer: ${lowercaseCount("")}`, `Result: ${0}`);
console.log(`Answer: ${lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")}`, `Result: ${0}`);
console.log(`Answer: ${lowercaseCount("abcdefghijklmnopqrstuvwxyz")}`, `Result: ${26}`);
