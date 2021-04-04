//* Higher Order Function
String.prototype.toJadenCase = function () {
  return (
    this.split(" ")
      // .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ")
  );
};

//* Regex
// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((word) => word.replace(/^\w/i, (m) => m.toUpperCase()))
//     .join(" ");
// };

const str = "How can mirrors be real if our eyes aren't real";

console.log(`Answer: ${str.toJadenCase()}`, "Result: How Can Mirrors Be Real If Our Eyes Aren't Real");
