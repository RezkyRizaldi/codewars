//* Regex
function remove(s, n) {
  //* for Loop Statement
  // for (var i = 0; i < n; i++) s = s.replace("!", "");
  // return s;

  //* While Statement
  // while (n) {
  //   s = s.replace(/!/, "");
  //   n -= 1;
  // }

  // return s;

  //* String.prototype.replace()
  return s.replace(/!/g, (c) => (n-- > 0 ? "" : c));
}

console.log(`Answer: ${remove("Hi!", 1)}`, "Result: Hi");
console.log(`Answer: ${remove("Hi!", 100)}`, "Result: Hi");
console.log(`Answer: ${remove("Hi!!!", 1)}`, "Result: Hi!!");
console.log(`Answer: ${remove("Hi!!!", 100)}`, "Result: Hi");
console.log(`Answer: ${remove("!Hi", 1)}`, "Result: Hi");
console.log(`Answer: ${remove("!Hi!", 1)}`, "Result: Hi!");
console.log(`Answer: ${remove("!Hi!", 100)}`, "Result: Hi");
console.log(`Answer: ${remove("!!!Hi !!hi!!! !hi", 1)}`, "Result: !!Hi !!hi!!! !hi");
console.log(`Answer: ${remove("!!!Hi !!hi!!! !hi", 3)}`, "Result: Hi !!hi!!! !hi");
console.log(`Answer: ${remove("!!!Hi !!hi!!! !hi", 5)}`, "Result: Hi hi!!! !hi");
console.log(`Answer: ${remove("!!!Hi !!hi!!! !hi", 100)}`, "Result: Hi hi hi");
