// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

//  

// 示例：

// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
//  

// 提示：

// 给定单词的长度不超过500。
// 给定单词中的字符只含有小写字母。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  let len1 = word1.length + 1
  let len2 = word2.length + 1

  let dp = new Array(len2).fill(0).map(() => new Array(len1).fill(0))
  let maxNum = 0
  let strArr = []
  for(let i=1; i<len2; i++){
    for(let j=1; j<len1; j++){
      if(word1[j-1] == word2[i-1]){
        dp[i][j] = dp[i-1][j-1] + 1
        if(dp[i][j] > maxNum){
          maxNum = dp[i][j]
          strArr.push(word1[j-1])
        }
      }else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  const maxLen = dp[len2-1][len1-1]
  return len1 - maxLen - 1 + len2 - maxLen -1
};
console.log(minDistance('sea', 'eads'))
