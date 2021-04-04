/**
 * 
 * @param {string} [yearOrMonthOrDate] 
 */
function calculateLifePath(yearOrMonthOrDate) {
  let temp;
  let splittedStrings = yearOrMonthOrDate.toString().split('');
  console.log(splittedStrings);

  if (splittedStrings.length > 1) {
    temp = splittedStrings
      .map((c) => parseInt(c, 10))
      .reduce((acc, val) => acc + val);

    if (temp.toString().length > 1) {
      return calculateLifePath(temp.toString());
    }
  }

  console.log(temp);
  return temp;
}

/**
 * Calculate a life path number from the date format 'yyyy-mm-dd'
 * 
 * @param {string} dateOfBirth date of birth, in 'yyyy-mm-dd'
 * @returns {number}
 */
function lifePathNumber(dateOfBirth) {
  // const [y, m, d] = dateOfBirth.split('-');
  const dates = dateOfBirth.split('-');

  const result = dates
    .map(date => calculateLifePath(parseInt(date, 10)))
    .reduce((acc, val) => acc + val);

  console.log(calculateLifePath(result));

  // return calculateLifePath(
  //   (
  //     calculateLifePath(y) +
  //     calculateLifePath(m) +
  //     calculateLifePath(d)
  //   ).toString()
  // );
}

console.log(`Answer: ${lifePathNumber('2002-09-30')}`, 'Result: 7');