//* Higher Order Function
function maskify(cc) {
  //* Spread Operator / Array.prototype.split() with Array.prototype.join()
  // const ccArr = cc.split("");
  const ccArr = [...cc];
  for (let i = 0; i < ccArr.length - 4; i++) {
    ccArr[i] = "#";
  }
  return ccArr.join("");

  //* String.prototype.repeat() and String.prototype.substring()
  // return cc.length > 1 ? "#".repeat(cc.length - 4) + cc.substring(cc.length - 4, cc.length) : cc;

  //* Regex with String.prototype.replace()
  // return cc.replace(/[0-9]/g, (c, i) => (i < cc.length - 4 ? "#" : c));
  // return cc.replace(/\w/gi, (c, i) => (cc.length - i > 4 ? "#" : c));

  //* Array.prototype.reverse(), Array.prototype.map(), and Array.prototype.join()
  // return cc
  //   .split("")
  //   .reverse()
  //   .map((v, i) => (i > 3 ? "#" : v))
  //   .reverse()
  //   .join("");
}

console.log(`Answer: ${maskify("1234567890964646")}`, "Result: ############4646");
console.log(`Answer: ${maskify("1")}`, "Result: 1");
console.log(`Answer: ${maskify("11111")}`, "Result: #1111");
