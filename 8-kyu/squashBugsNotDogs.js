function howManyDalmatians(number) {
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2];
}

console.log(`Answer: ${howManyDalmatians(26)}`, "Result: More than a handful!");
console.log(`Answer: ${howManyDalmatians(8)}`, "Result: Hardly any");
console.log(`Answer: ${howManyDalmatians(14)}`, "Result: More than a handful!");
console.log(`Answer: ${howManyDalmatians(80)}`, "Result: Woah that's a lot of dogs!");
console.log(`Answer: ${howManyDalmatians(100)}`, "Result: Woah that's a lot of dogs!");
console.log(`Answer: ${howManyDalmatians(101)}`, "Result: 101 DALMATIANS!!!");
