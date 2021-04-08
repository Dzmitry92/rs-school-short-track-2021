/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  matrix.forEach((innerArr, indexArr) => {
    if (Array.isArray(matrix[indexArr - 1])) {
      innerArr.forEach((elem, index) => {
        if (matrix[indexArr - 1][index] > 0) {
          res += elem;
        }
      });
    } else {
      innerArr.forEach((elem) => {
        if (elem > 0) {
          res += elem;
        }
      });
    }
  });
  return res;
}

module.exports = getMatrixElementsSum;
