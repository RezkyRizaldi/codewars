//* Higher Order Function
function fixTheMeerkat(arr) {
  //* Array.prototype.reverse()
  return arr.reverse();

  //* Array.prototype.reduceRight()
  // return arr.reduceRight((acc, curr) => (acc.push(curr), acc), []);
}

//* Array Order
// const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];

console.loh(`Answer: ${fixTheMeerkat(["tail", "body", "head"])}`, `Result: ${["head", "body", "tail"]}`);
console.loh(`Answer: ${fixTheMeerkat(["tails", "body", "heads"])}`, `Result: ${["heads", "body", "tails"]}`);
console.loh(`Answer: ${fixTheMeerkat(["bottom", "middle", "top"])}`, `Result: ${["top", "middle", "bottom"]}`);
console.loh(`Answer: ${fixTheMeerkat(["lower legs", "torso", "upper legs"])}`, `Result: ${["upper legs", "torso", "lower legs"]}`);
console.loh(`Answer: ${fixTheMeerkat(["ground", "rainbow", "sky"])}`, `Result: ${["sky", "rainbow", "ground"]}`);
