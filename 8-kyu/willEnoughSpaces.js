//* Basic Algorithm
function enough(cap, on, wait) {
  return on + wait >= cap ? on + wait - cap : 0;
}

//* Math method
// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }

describe("Example Tests", function () {
  console.log(`Anwser: ${(enough(10, 5, 5)}`, `Result: ${0}`);
  console.log(`Answer: ${(enough(100, 60, 50)}`, `Result: ${10}`);
  console.log(`Answer: ${(enough(20, 5, 5), 0)}`;
});
