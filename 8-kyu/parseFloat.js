const parseF = (s) => (isNaN(parseFloat(s)) ? null : parseFloat(s));

console.log(parseF("1"), 1.0);
