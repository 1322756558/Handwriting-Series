/*
 * @Autor: junhui li
 * @Date: 2021-08-10 17:55:02
 * @LastEditors: junhui li
 * @LastEditTime: 2021-08-11 10:50:14
 * @Description: 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let sortNums = nums.sort((a, b) => a - b)
  let cha = sortNums[0] + sortNums[1] + sortNums[2]
  for(let j=0; j<nums.length; j++){
    let last = sortNums.length-1
    for(let i=j+1; i<last; i++){
      if(Math.abs(target - (sortNums[last] + sortNums[i] + sortNums[j])) < Math.abs(target - cha)){
        cha = sortNums[last] + sortNums[i] + sortNums[j]
      }
      while(sortNums[j] + sortNums[last] + sortNums[i] > target){
        last--
        if(last === i) break
        if(Math.abs(target - (sortNums[last] + sortNums[i] + sortNums[j])) < Math.abs(target - cha)){
          cha = sortNums[last] + sortNums[i] + sortNums[j]
        }
      }
    }
  }
  return cha
};

console.log(threeSumClosest([0,1,2], 0))