/*
 * @Autor: junhui li
 * @Date: 2021-08-12 14:53:19
 * @LastEditors: junhui li
 * @LastEditTime: 2021-08-12 16:32:00
 * @Description: 
 */
// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

//  

// 示例 1：

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。
//  

// 提示：

// 1 <= s.length <= 1000
// s 仅由小写英文字母组成

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
  let sArr = [...s]
  let dp = new Array(sArr.length).fill([]).map(()=>new Array(sArr.length).fill(0))

  for(let i=sArr.length-1; i>=0; i--){
    dp[i][i] = 1
    for(let j=i+1; j<sArr.length; j++){   
      if(sArr[i] == sArr[j]){
        dp[i][j] = dp[i+1][j-1] + 2
      }else{
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }
  return dp
};

console.log(longestPalindromeSubseq("bbbab"))