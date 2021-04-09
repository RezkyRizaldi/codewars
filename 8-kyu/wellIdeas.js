//* Basic Algorithm
// function well(x) {
//   let good = 0;

//   for (let i = 0; i < x.length; ++i) if (x[i] == "good" && ++good > 2) return "I smell a series!";

//   return good ? "Publish!" : "Fail!";
// }

//* Switch Case Statement
function well(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}

console.log(`Answer: ${well(["bad", "bad", "bad"])}`, "Result: Fail!");
console.log(`Answer: ${well(["good", "bad", "bad", "bad", "bad"])}`, "Result: Publish!");
console.log(`Answer: ${well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])}`, "Result: I smell a series!");
