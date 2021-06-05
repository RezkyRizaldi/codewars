function drawStairs(n) {
  if (n > 1) {
    let str = "";

    for (let i = 1; i < n; i++) {
      str += `I\n${" ".repeat(i)}`;
    }

    return str + "I";
  } else {
    return "I";
  }
}

const drawStairs = (n) => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

const drawStairs = (n) =>
  Array(n)
    .fill("I")
    .map((e, i) => e.padStart(i + 1, " "))
    .join("\n");

console.log(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'");
console.log(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good");
