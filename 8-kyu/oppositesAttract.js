function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true;
  } else if ((flower1 % 2 !== 1 && flower2 % 2 !== 1) || (flower1 % 2 !== 0 && flower2 % 2 !== 0)) {
    return false;
  } else {
    return true;
  }

  //* Refactor
  // return flower1 % 2 !== flower2 % 2;

  // return (flower1 + flower2) % 2 === 1;
}

console.log(lovefunc(1, 4), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(0, 1), true);
console.log(lovefunc(0, 0), false);
