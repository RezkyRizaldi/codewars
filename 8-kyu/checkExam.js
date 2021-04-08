function checkExam(correctAnswers, studentAnswers) {
  let score = 0;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === studentAnswers[i]) {
      score += 4;
    } else if (studentAnswers[i] === "") {
      score -= 0;
    } else {
      score -= 1;
    }
  }

  if (score < 0) {
    score = 0;
  }

  return score;
}

// const checkExam = (x, y) => ((x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === "" ? 0 : -1), 0)) > 0 ? x : 0);

console.log(`Answer: ${checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])}`, `Result: ${6}`);
console.log(`Answer: ${checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])}`, `Result: ${7}`);
console.log(`Answer: ${checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])}`, `Result: ${16}`);
console.log(`Answer: ${checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])}`, `Result: ${0}`);
