/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const firstArr = s1.split('');
  const secondArr = s2.split('');
  firstArr.forEach((elem) => {
    const repIndex = secondArr.indexOf(elem);
    if (repIndex !== -1) {
      counter += 1;
      secondArr.splice(repIndex, 1);
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;
