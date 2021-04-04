//* Basic Algorithm
// function accum(s) {
// 	const strArr = s.split('');
// 	const resArr = [];

//  	for (let i = 0; i < strArr.length; ++i) {
// 		let temp = '';
//     for (let j = 0; j <= i; ++j) {
// 			if (j === 0) {
// 				temp += strArr[i].toUpperCase();
// 			} else {
// 				temp += strArr[i].toLowerCase();
// 			}
//     }
//     resArr.push(temp);
//   }
// 	console.log(strArr, temp);
// 	return resArr.join('-');
// }

//* Higher Order Function
const accum = (s) => {
  return s
    .toLowerCase()
    .split("")
    .map((e, i) => e.toUpperCase() + e.repeat(i))
    .join("-");
};

console.log(`Answer: ${accum("AbCd")}`, "Result: A-Bb-Ccc-Dddd");
