//* Higher Order Function
// function shortcut(string) {
//   return string
//   .split("")
//   .filter((s) => "aeiou".indexOf(s) === -1)
//   .join("");
// }

//* Regex
function shortcut(string) {
  return string.replace(/[aiueo]/g, "");

  // return string.split(/[aeiou]/g).join("");
}

console.log(shortcut("hello") == "hll", "encode failed. Your result: " + shortcut("hello") + " Expected result: hll");
console.log(shortcut("how are you today?") == "hw r y tdy?", "shortcut did not work properly");
console.log(shortcut("complain") == "cmpln", "shortcut did not work properly");
console.log(shortcut("never") == "nvr", "shortcut did not work properly");
