function correctTail(body, tail) {
  //* String.prototype.substr()
  // return body.substr(body.length - tail.length) === tail;

  //* String.prototype.slice()
  // return bod.slice(-1) === tail;

  //* String.prototype.endsWith()
  return body.endsWith(tail);
}

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);
