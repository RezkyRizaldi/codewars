const rps = (p1, p2) => {
  const getMsg = (n) => `Player ${n} won!`;
  return p1 === "rock" && p2 === "scissors"
    ? getMsg(1)
    : p1 === "scissors" && p2 === "paper"
    ? getMsg(1)
    : p1 === "paper" && p2 === "rock"
    ? getMsg(1)
    : p1 === "scissors" && p2 === "rock"
    ? getMsg(2)
    : p1 === "paper" && p2 === "scissors"
    ? getMsg(2)
    : p1 === "rock" && p2 === "paper"
    ? getMsg(2)
    : "Draw!";
};

console.log(rps("rock", "scissors"), "Result: Player 1 won!");
console.log(rps("scissors", "paper"), "Result: Player 1 won!");
console.log(rps("paper", "rock"), "Result: Player 1 won!");
console.log(rps("scissors", "rock"), "Result: Player 2 won!");
console.log(rps("paper", "scissors"), "Result: Player 2 won!");
console.log(rps("rock", "paper"), "Result: Player 2 won!");
console.log(rps("rock", "rock"), "Draw!");
console.log(rps("scissors", "scissors"), "Draw!");
console.log(rps("paper", "paper"), "Draw!");
