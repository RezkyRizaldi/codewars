const isDigit = (s) => s == parseFloat(s);

let input = "s2324";
console.log(isDigit(input), false);

input = "-234.4";
console.log(isDigit(input), true);
