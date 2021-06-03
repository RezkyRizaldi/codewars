const shortenToDate = (longDate) => longDate.substring(0, longDate.indexOf(","));

console.log(`Answer: ${shortenToDate("Friday May 2, 9am")}`, "Result: Friday May 2");
console.log(`Answer: ${shortenToDate("Tuesday January 29, 10pm")}`, "Result: Tuesday January 29");
console.log(`Answer: ${shortenToDate("Monday December 25, 10pm")}`, "Result: Monday December 25");
