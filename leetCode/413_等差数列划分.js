/*
 * @Autor: junhui li
 * @Date: 2021-08-10 10:07:04
 * @LastEditors: junhui li
 * @LastEditTime: 2021-08-10 14:30:21
 * @Description: 
 */
// 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
// 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

// 子数组 是数组中的一个连续序列。

//  

// 示例 1：

// 输入：nums = [1,2,3,4]
// 输出：3
// 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。
// 示例 2：

// 输入：nums = [1]
// 输出：0
//  

// 提示：

// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己答案
var numberOfArithmeticSlices = function(nums) {
  if(nums.length<3) return 0
  let count = 0
  for(let i=nums.length; i>=3; i--){
    for(let j=0; j<=nums.length-i; j++){
      let difference = nums[j+1] - nums[j]
      for(let k=0; k<i-1; k++){
        if(nums[j+k+1] - nums[j+k] !== difference){
          break
        }
        if(k === i-2){
          count+=1
        }
      }
    }
  }
  return count
};

// 优化
// 思路 每次等差数列的增加数应该是： 当前这个等差数列的长度-2
var numberOfArithmeticSlices = function(nums) {
  if(nums.length<3) return 0
  let c=0, t=0
  for (let i = 1; i < nums.length; ++i) {
    if(nums[i] - nums[i-1] == nums[i+1] - nums[i]){
      t++
      c+=t
    }else{
      t = 0
    }
  }
  return c
};

console.log(numberOfArithmeticSlices([1,2,3,4]))