// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

//  
// 示例 1：

// 输入：points = [[0,0],[1,0],[2,0]]
// 输出：2
// 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
// 示例 2：

// 输入：points = [[1,1],[2,2],[3,3]]
// 输出：2
// 示例 3：

// 输入：points = [[1,1]]
// 输出：0

/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
  let pointsCount = points.length
  
  let doubleDimensionalArray = new Array()
  for(let i=0; i<pointsCount; i++){
    doubleDimensionalArray[i] = new Map();
  }

  for(let i=0; i<points.length; i++){
    for(let j=i; j<points.length; j++){
      let len = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2)
      let iNum = doubleDimensionalArray[i].get(len)
      let jNum = doubleDimensionalArray[j].get(len)
      if(iNum){
        doubleDimensionalArray[i].set(len, iNum+1)
      }else{
        doubleDimensionalArray[i].set(len, 1)
      }

      if(jNum){
        doubleDimensionalArray[j].set(len, jNum+1)
      }else{
        doubleDimensionalArray[j].set(len, 1)
      }
    }
  }

  let boomerangsCount = 0
  for(let i=0; i<doubleDimensionalArray.length; i++){
    for (let [key, value] of doubleDimensionalArray[i].entries()) {
      if(value >= 2){
        boomerangsCount += value*(value - 1)
      }
    }
  }

  return boomerangsCount
};

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))