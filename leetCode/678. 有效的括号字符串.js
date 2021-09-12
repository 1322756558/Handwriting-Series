// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
// 一个空字符串也被视为有效字符串。
// 示例 1:

// 输入: "()"
// 输出: True
// 示例 2:

// 输入: "(*)"
// 输出: True
// 示例 3:

// 输入: "(*))"
// 输出: True
// 注意:

// 字符串大小将在 [1，100] 范围内。

// 栈解法
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
  let leftBracketsStack = []
  let starStack = []

  for(let i=0; i<s.length; i++){
    if(s[i] === '('){
      leftBracketsStack.push(i)
    }
    if(s[i] === '*'){
      starStack.push(i)
    }
    if(s[i] === ')'){
      if(leftBracketsStack.length > 0){
        leftBracketsStack.pop()
      }else if(starStack.length > 0){
        starStack.pop()
      }else{
        return false
      }
    }
  }

  console.log(leftBracketsStack)
  console.log(starStack)

  if(leftBracketsStack.length > starStack.length) return false

  while(leftBracketsStack.length && starStack.length){
    if(leftBracketsStack.pop() > starStack.pop()){
      return false
    }
  }

  return true
};

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
  let min = 0;
  let max = 0;

  for(let i=0; i<s.length; i++){
    if(s[i] === '('){
      min++
      max++
    }
    if(s[i] === ')'){
      min = Math.max(0, min-1)
      max--
    }
    if(s[i] === '*'){
      min = Math.max(0, min-1)
      max++
    }

    if(max < 0){
      return false
    }
  }
  console.log(min)
  if(min === 0){
    return true
  }

  return false
};

console.log(checkValidString('(*)'))