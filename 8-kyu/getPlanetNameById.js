//* Switch Case Statement
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

//* Array
const getPlanetName = (id) => ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"][--id];

console.log(`Answer: ${getPlanetName(2)}`, "Result: Venus");
console.log(`Answer: ${getPlanetName(5)}`, "Result: Jupiter");
console.log(`Answer: ${getPlanetName(3)}`, "Result: Earth");
