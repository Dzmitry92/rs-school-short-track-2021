/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNamesArr = [];
  if (names.length > 0) {
    uniqueNamesArr.push(names[0]);
  }
  for (let i = 1; i < names.length; i += 1) {
    let count = 0;
    for (let k = 0; k < i; k += 1) {
      if (names[i] === names[k]) {
        count += 1;
      }
    }
    if (count > 0) {
      uniqueNamesArr.push(`${names[i]}(${count})`);
    } else {
      uniqueNamesArr.push(names[i]);
    }
  }
  let uniq = true;
  for (let j = 0; j < uniqueNamesArr.length - 1; j += 1) {
    for (let g = j + 1; g < uniqueNamesArr.length; g += 1) {
      if (uniqueNamesArr[j] === uniqueNamesArr[g]) {
        uniq = false;
        break;
      }
    }
  }
  if (!uniq) {
    return renameFiles(uniqueNamesArr);
  }
  return uniqueNamesArr;
}

module.exports = renameFiles;
