//^ String.prototype.split("") & Array.prototype.join("")
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

//* Regex
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

console.log(`Answer: ${removeExclamationMarks("Hello World!")}`, "Result: Hello World");
