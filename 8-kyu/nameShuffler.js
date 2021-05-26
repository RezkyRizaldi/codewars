//* Array.prototype.reverse()
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

//* Regex
const nameShuffler = (str) => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

console.log(`Answer: ${nameShuffler("john McClane")}`, "Result: McClane john");
