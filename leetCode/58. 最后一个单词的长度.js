/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  const word = s.split(/\s+/)
  return word[word.length-1] ? word[word.length-1].length : word[word.length-2].length
};