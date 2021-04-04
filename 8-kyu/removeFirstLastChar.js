//* Higher Order Function
function removeChar(str) {
  const arrStr = str.split("");
  arrStr.shift();
  arrStr.pop();
  return arrStr.join("");

  // return str.slice(1, -1);

  // return str.substring(1, str.length - 1);

  // return str.substr(1, str.length - 2);

  // return str.replace(/^.|.$/g, "");
}

console.log(`Answer: ${removeChar("eloquent")}`, "Result: loquen");
console.log(`Answer: ${removeChar("country")}`, "Result: ountr");
console.log(`Answer: ${removeChar("person")}`, "Result: erso");
console.log(`Answer: ${removeChar("place")}`, "Result: lac");
