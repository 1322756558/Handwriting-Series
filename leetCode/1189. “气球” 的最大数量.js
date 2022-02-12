// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
  let map = {};
  for(let i = 0; i < text.length; i++){
    if(map[text[i]]){
      map[text[i]]++;
    }else{
      map[text[i]] = 1;
    }
  }
  
  if(map['b'] && map['a'] && map['l'] && map['o'] && map['n'] && map['l'] >= 2 && map['o'] >= 2){
    return Math.max(map['b'], map['a'], Math.floor(map['l']/2), Math.floor(map['o']/2), map['n'])
  }
  return 0
};