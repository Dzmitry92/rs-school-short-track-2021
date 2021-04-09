/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const bombsMatrix = [];
  matrix.forEach((row, rowIndex) => {
    const bombsRow = [];
    row.forEach((elem, elemIndex) => {
      let bombsCounter = 0;
      if (rowIndex > 0) {
        if (matrix[rowIndex - 1][elemIndex - 1]) {
          bombsCounter += 1;
        }
        if (matrix[rowIndex - 1][elemIndex]) {
          bombsCounter += 1;
        }
        if (matrix[rowIndex - 1][elemIndex + 1]) {
          bombsCounter += 1;
        }
      }
      if (rowIndex < matrix.length - 1) {
        if (matrix[rowIndex + 1][elemIndex - 1]) {
          bombsCounter += 1;
        }
        if (matrix[rowIndex + 1][elemIndex]) {
          bombsCounter += 1;
        }
        if (matrix[rowIndex + 1][elemIndex + 1]) {
          bombsCounter += 1;
        }
      }
      if (row[elemIndex - 1]) {
        bombsCounter += 1;
      }
      if (row[elemIndex + 1]) {
        bombsCounter += 1;
      }
      bombsRow.push(bombsCounter);
    });
    bombsMatrix.push(bombsRow);
  });
  return bombsMatrix;
}

module.exports = minesweeper;
