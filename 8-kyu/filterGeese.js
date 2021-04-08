//* Higher Order Function
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  //* Array.prototype.includes()
  return birds.filter((b) => !geese.includes(b));

  //* Array.prototype.indexOf()
  // return birds.filter((b) => geese.indexOf(b) < 0);
}

//* Recursive with Array.prototype.pop()
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//   return gooseFilter.pop(geese);
// }

console.log(`Answer: ${gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])}`, `Result: ${["Mallard", "Hook Bill", "Crested", "Blue Swedish"]}`);
console.log(`Answer: ${gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])}`, `Result: ${["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]}`);
console.log(`Answer: ${gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])}`, `Result: ${[]}`);
