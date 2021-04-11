//* Object Literal
// function getDrinkByProfession(param) {
//   let list = {
//     jabroni: "Patron Tequila",
//     "school counselor": "Anything with Alcohol",
//     programmer: "Hipster Craft Beer",
//     "bike gang member": "Moonshine",
//     politician: "Your tax dollars",
//     rapper: "Cristal",
//   };

//   return list[param.toLowerCase()] || "Beer";
// }

//* Switch Case Statement
function getDrinkByProfession(param) {
  const input = param
    .split(" ")
    .map((e) => `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`)
    .join(" ");

  switch (input) {
    case "Jabroni":
      return "Patron Tequila";
    case "School Counselor":
      return "Anything with Alcohol";
    case "Programmer":
      return "Hipster Craft Beer";
    case "Bike Gang Member":
      return "Moonshine";
    case "Politician":
      return "Your tax dollars";
    case "Rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

console.log(`Answer: ${getDrinkByProfession("jabrOni")}`, "Result: Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(`Answer: ${getDrinkByProfession("scHOOl counselor")}`, "Result: Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(`Answer: ${getDrinkByProfession("prOgramMer")}`, "Result: Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(`Answer: ${getDrinkByProfession("bike ganG member")}`, "Result: Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(`Answer: ${getDrinkByProfession("poLiTiCian")}`, "Result: Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(`Answer: ${getDrinkByProfession("rapper")}`, "Result: Cristal", "'Rapper' should map to 'Cristal'");
console.log(`Answer: ${getDrinkByProfession("pundit")}`, "Result: Beer", "'Pundit' should map to 'Beer'");
console.log(`Answer: ${getDrinkByProfession("Pug")}`, "Result: Beer", "'Pug' should map to 'Beer'");
