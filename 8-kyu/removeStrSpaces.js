//* Higher Order Function
function noSpace(str) {
  // return str.split(" ").join("");

  return str.replace(/\s/g, "");
}

console.log(`Answer: ${noSpace("8 j 8   m8li88g  imj8888  jl  8")}`, "Result: 8j8m8li88gimj8888jl8");
console.log(`Answer: ${noSpace("abc   dadaak kadn aj")}`, "Result: abcdadaakkadnaj");
console.log(`Answer: ${noSpace("idaiod daindai j")}`, "Result: idaioddaindaij");
