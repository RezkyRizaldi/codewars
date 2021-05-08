//* Switch Case Statement
function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

//* Array
function whatday(num) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num - 1] || "Wrong, please enter a number between 1 and 7";
}

//* Object
function whatday(num) {
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };

  return days[num] || "Wrong, please enter a number between 1 and 7";
}

console.log(`Answer: ${whatday(1)}`, "Result: Sunday");
console.log(`Answer: ${whatday(2)}`, "Result: Monday");
console.log(`Answer: ${whatday(3)}`, "Result: Tuesday");
console.log(`Answer: ${whatday(8)}`, "Result: Wrong, please enter a number between 1 and 7");
console.log(`Answer: ${whatday(20)}`, "Result: Wrong, please enter a number between 1 and 7");
