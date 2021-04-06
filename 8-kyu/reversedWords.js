function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(`Answer: ${reverseWords("hello world!")}`, "Result: world! hello");
console.log(`Answer: ${reverseWords("yoda doesn't speak like this")}`, "Result: this like speak doesn't yoda");
console.log(`Answer: ${reverseWords("foobar")}`, "Result: foobar");
console.log(`Answer: ${reverseWords("kata editor")}`, "Result: editor kata");
console.log(`Answer: ${reverseWords("row row row your boat")}`, "Result: boat your row row row");
