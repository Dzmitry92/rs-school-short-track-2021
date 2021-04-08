/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;
  const resultArr = [];
  const sortedArr = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  arr.forEach((elem) => {
    if (elem !== -1) {
      resultArr.push(sortedArr[index]);
      index += 1;
    } else {
      resultArr.push(-1);
    }
  });
  return resultArr;
}

module.exports = sortByHeight;
