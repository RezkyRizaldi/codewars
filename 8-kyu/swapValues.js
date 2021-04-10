//* Array.prototype
function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

//* Array.prototype.reverse()
function swapValues(arr) {
  return arr.reverse();

  // return arguments[0].reverse();
}

var arr = [1, 2];
swapValues(arr);
console.log(`Answer: ${arr[0]}`, `Result: ${2}`, "Failed swapping numbers");
console.log(`Answer: ${arr[1]}`, `Result: ${1}`, "Failed swapping numbers");
