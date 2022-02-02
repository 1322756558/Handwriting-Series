/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
   let reverseSubstring = '';
  for(let i=0; i<word.length; i++){
    reverseSubstring = word[i] + reverseSubstring;
    if(word[i] === ch){
      return reverseSubstring + word.substring(i+1);
    }
  }

  return word
};