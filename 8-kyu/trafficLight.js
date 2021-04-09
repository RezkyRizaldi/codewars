//* Object Literal
// const updateLight = (current) =>
//   ({
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   }[current]);

//* Ternary
function updateLight(current) {
  return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";
}

//* Switch Case Statement
// function updateLight(current) {
//   switch (current) {
//     case "green":
//       return "yellow";
//       break;
//     case "yellow":
//       return "red";
//       break;
//     case "red":
//       return "green";
//       break;
//   }
// }

console.log(`Answer: ${updateLight("green")}`, "Result: yellow");
console.log(`Answer: ${updateLight("yellow")}`, "Result: red");
console.log(`Answer: ${updateLight("red")}`, "Result: green");
