// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let tails = []
  for(let i=0; i<nums.length; i++){
    if(tails.length == 0 || nums[i] > tails[tails.length-1]){
      tails.push(nums[i])
    }else{
      let l = 0
      let r = tails.length-1
      let j = 0
      let lock = 0
      while(l<=r){
        j = Math.floor(l + r)
        if(tails[j] >= nums[i]){
          lock = j
          r = j-1
        }else{
          l = j+1
        }
      }
      tails[lock] = nums[i]
    }
  }
  console.log(tails)
  return tails.length
};

console.log(lengthOfLIS([4,10,4,3,8,9]))