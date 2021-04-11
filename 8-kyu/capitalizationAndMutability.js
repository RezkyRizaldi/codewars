//* Basic Algorithm
// function capitalizeWord(word) {
//   var str = word[0].toUpperCase();
//   for (let i = 1; i < word.length; i++) {
//     str += word[i];
//   }
//   return str;
// }

//* String.prototype.slice()
function capitalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

//* Regex
// function capitalizeWord(word) {
//   // return word.replace(word.charAt(0), word.charAt(0).toUpperCase());

//   return word.replace(/^\w/, (w) => w.toUpperCase());
// }

console.log(`Answer: ${capitalizeWord("word")}`, "Result: Word");
console.log(`Answer: ${capitalizeWord("i")}`, "Result: I");
console.log(`Answer: ${capitalizeWord("glasswear")}`, "Result: Glasswear");
