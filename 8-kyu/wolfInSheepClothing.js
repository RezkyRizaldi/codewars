function warnTheSheep(queue) {
  // return queue[queue.length - 1] === "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - queue.findIndex((x) => x == "wolf") - 1}! You are about to be eaten by a wolf!`;

  return queue[queue.length - 1] === "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - (queue.indexOf("wolf") + 1)}! You are about to be eaten by a wolf!`;
}

console.log(`Answer: ${warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])}`, "Result: Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(`Answer: ${warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])}`, "Result: Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(`Answer: ${warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])}`, "Result: Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(`Answer: ${warnTheSheep(["sheep", "wolf", "sheep"])}`, "Result: Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(`Answer: ${warnTheSheep(["sheep", "sheep", "wolf"])}`, "Result: Pls go away and stop eating my sheep");
