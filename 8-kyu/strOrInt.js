function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}

  console.log(`AnsweR: ${problem("hello")}`, "Result: Error");
  console.log(`AnsweR: ${problem(1)}`, `Result: ${56}`);
  console.log(`AnsweR: ${problem(5)}`, `Result: ${256}`);
  console.log(`AnsweR: ${problem(0)}`, `Result: ${6}`);
  console.log(`AnsweR: ${problem(1.2)}`, `Result: ${66}`);
  console.log(`AnsweR: ${problem(3)}`, `Result: ${156}`);
  console.log(`AnsweR: ${problem("RyanIsCool")}`, "Result: Error");
  console.log(`AnsweR: ${problem(-3)}`, `Result: ${-144}`);
  console.log(`AnsweR: ${problem(""), "Result: Error");
  console.log(`AnsweR: ${problem(0.03)}`, `Result: ${7.5}`);

