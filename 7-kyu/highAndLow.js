//* Basic Algorithm
// function highAndLow(numbers) {
// 	const numArr = numbers.split(' ');
// 	// let min = Number(numArr[0]);
// 	let min = parseInt(numArr[0]);
// 	let max = parseInt(numArr[0]);
// 	for (let i = 0; i < numArr.length; ++i) {
// 		if (min < parseInt(numArr[i])) {
// 			min = parseInt(numArr[i]);
// 		}

// 		if (min > parseInt(numArr[i])) {
// 			max = parseInt(numArr[i]);
// 		}
// 	}
// 	console.log(numArr, min, max);
// 	return min + ' ' + max;
// }

//* Higher Order Function
// function highAndLow(numbers) {
// 	const sortedNum = numbers.split(' ').map(Number).sort((a, b) => b - a)

// 	return `${sortedNum[0]} ${sortedNum.pop()}`;
// }

//* Math method
// function highAndLow(numbers) {
// 	const numArr = numbers.split(' ').map((num) => Number(num));

// 	return Math.max(...numArr) + ' ' + Math.min(...numArr);
// }

function highAndLow(numbers) {
  return (
    String(
      numbers
        .split(" ")
        .map((num) => parseInt(num))
        .sort((a, b) => b - a)[0]
    ) +
    " " +
    String(
      numbers
        .split(" ")
        .map((num) => parseInt(num))
        .sort((a, b) => a - b)[0]
    )
  );
}

console.log(`Answer: ${highAndLow("1 2 3 4 5")}`, "Result: 5 1");
console.log(`Answer: ${highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")}`, "Result: 542 -214");
