//* Basic Algorithm
function feast(beast, dish) {
  //* String.prototype.slice()
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);

  //* String.prototype.codeCharAt()
  // return beast.charCodeAt(0) === dish.charCodeAt(0) && beast.charCodeAt(beast.length - 1) === dish.charCodeAt(dish.length - 1);

  //* String.prototype.charAt()
  // return beast.charCodeAt(0) === dish.charCodeAt(0) && beast.charCodeAt(beast.length - 1) === dish.charCodeAt(dish.length - 1);

  //* String.prototype.startsWith() & String.prototype.endsWith()
  // return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}

//* Array.prototype.shift() & Array.prototype.pop()
// function feast(beast, dish) {
//   return [...beast].shift() === [...dish].shift() && [...beast].pop() === [...dish].pop();
// }

//* Regex
// const feast = (beast, dish) => /^(.).*(.),\1.*\2$/.test(arguments);

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
