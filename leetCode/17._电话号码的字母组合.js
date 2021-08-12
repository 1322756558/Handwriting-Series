/*
 * @Autor: junhui li
 * @Date: 2021-08-12 17:16:18
 * @LastEditors: junhui li
 * @LastEditTime: 2021-08-12 17:58:20
 * @Description:
 */

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 思路：记录上一次的数字串进行叠加（回溯法）
/*
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  let key = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let tempArray = []
  let resultArray = key[digits[0]]
  for(let i=1; i<digits.length; i++){
    tempArray = []
    for(let j of resultArray){
      for(let k of key[digits[i]]){
        tempArray.push(j + k)
      }
    }
    resultArray = [...tempArray]
  }

  return resultArray
};

console.log(letterCombinations('234'))