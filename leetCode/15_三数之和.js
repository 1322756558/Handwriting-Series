/*
 * @Autor: junhui li
 * @Date: 2021-08-09 17:36:15
 * @LastEditors: junhui li
 * @LastEditTime: 2021-08-10 17:44:40
 * @Description:
 */

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]
//

// 提示：

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 原始 O3
// var threeSum = function (nums) {
//   if (nums.length < 3) return [];
//   let arrayList = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = 0; k < nums.length; k++) {
//       if (i === k) continue;
//       let num = (nums[i] + nums[k]) * -1;
//       let j = nums.indexOf(num);
//       if (j === i || j === k) {
//         continue;
//       }
//       if (nums[j] === num) {
//         arrayList.add(
//           [nums[k], nums[i], nums[j]].sort((a, b) => a - b).join(",")
//         );
//       }
//     }
//   }
//   let stringList = Array.from(arrayList);
//   let numList = [];
//   for (let string of stringList) {
//     numList.push(string.split(","));
//   }
//   return numList;
// };

// 双指针写法
// 思路想要避免重复的关键在于只要使得从左至右边递增（每个数值与上一个循环的数值不同）
// 双指针作用于后两个数字的循环 排序后 假设（a,b,c）可知  a < b < c , bc两个数值可以使用两个指针向中间遍历
var threeSum = function (nums) {
  let sortNums = nums.sort((a, b) => a-b)
  let numArrayList = []
  for(let i=0; i<sortNums.length; i++){
    let k = sortNums.length - 1
    if(i === 0 || sortNums[i] !== sortNums[i-1]){
      for(let j=i+1; j<k; j++){
        if(j === i+1 || sortNums[j] !== sortNums[j-1]){
          while(j<k && sortNums[i]+sortNums[j]+sortNums[k] > 0){
            k--
          }
          if(k === j){
            break
          }
          if(sortNums[i]+sortNums[j]+sortNums[k] === 0){
            numArrayList.push([sortNums[i], sortNums[j], sortNums[k]])
          }
        }
      }
    }
  }
  return numArrayList;
};
console.log(threeSum([3,0,-2,-1,1,2]));
