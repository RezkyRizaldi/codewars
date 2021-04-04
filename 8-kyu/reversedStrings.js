//* Basic Algorithm
// function solution(s) {
//     let temp = "";
//     for (let i = s.length - 1; i >= 0; i--) temp += s[i];
//     return temp;
// }

//* Higher Order Function
function solution(str) {
    return str.split("").reverse().join("");

    //* Recursive
    // return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : "";
}

//* Spread Operator
// const solution = (str) => [...str].reverse().join("");

console.log(`Answer: ${solution("hello")}`, "Result: olleh");
console.log(`Answer: ${solution("world")}`, "Result: dlrow");