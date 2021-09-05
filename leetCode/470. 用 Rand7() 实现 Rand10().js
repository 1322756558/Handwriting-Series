// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

// 不要使用系统的 Math.random() 方法。

//  

// 示例 1:

// 输入: 1
// 输出: [7]
// 示例 2:

// 输入: 2
// 输出: [8,4]
// 示例 3:

// 输入: 3
// 输出: [8,1,10]
//  

// 提示:

// rand7 已定义。
// 传入参数: n 表示 rand10 的调用次数。
//  

// 进阶:

// rand7()调用次数的 期望值 是多少 ?
// 你能否尽量少调用 rand7() ?

var rand7 = () => {
  return Math.ceil(Math.random()*7)
}

// 思路：总体来说解法基于公示(randX() - 1)*Y + randY() 可以等概率的生成[1, X * Y]范围的随机数
// 理论上在生成大量随机数的情况下舍弃的数字越少性能越优，但是leetcode的js判题其实是舍弃九个的时候最快

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let r7 = (rand7()-1)*7 + rand7()
  if(r7 > 40){
    r7 = (r7-41)*7 + rand7()

    if(r7 > 60) {
      r7 = (r7 - 61)*7 + rand7()

      if(r7 > 20){
        return rand10()
      }
    }
  }
  return (r7%10) + 1
};

var rand10 = function() {
  let r7 = (rand7()-1)*7 + rand7()
  if(r7 > 40){
    return rand10()
  }
  return (r7%10) + 1
};

console.log(rand10())