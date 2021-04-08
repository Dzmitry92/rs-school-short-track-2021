/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const resArr = [];
  let maxNum = 0;
  const numArr = n.toString().split('');
  numArr.forEach((elem, index) => {
    const clone = [...numArr];
    clone.splice(index, 1);
    resArr.push(+clone.join(''));
  });
  resArr.forEach((elem) => {
    if (elem >= maxNum) maxNum = elem;
  });
  return maxNum;
}

module.exports = deleteDigit;
