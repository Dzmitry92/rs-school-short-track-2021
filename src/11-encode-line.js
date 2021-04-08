/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if (str.length > 0) {
    const arr = [];
    let quantity = 0;
    let char = str[0];
    str.split('').forEach((elem) => {
      if (elem === char) {
        quantity += 1;
      } else {
        arr.push(`${quantity}${char}`);
        quantity = 1;
        char = elem;
      }
    });
    arr.push(`${quantity}${char}`);
    result = arr.map((elem) => elem.replace('1', '')).join('');
  }
  return result;
}

module.exports = encodeLine;
