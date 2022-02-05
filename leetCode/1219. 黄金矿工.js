// 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

// 为了使收益最大化，矿工需要按以下规则来开采黄金：

// 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
// 矿工每次可以从当前位置向上下左右四个方向走。
// 每个单元格只能被开采（进入）一次。
// 不得开采（进入）黄金数目为 0 的单元格。
// 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。
//

// 示例 1：

// 输入：grid = [[0,6,0],[5,8,7],[0,9,0]]
// 输出：24
// 解释：
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// 一种收集最多黄金的路线是：9 -> 8 -> 7。
// 示例 2：

// 输入：grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// 输出：28
// 解释：
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// 一种收集最多黄金的路线是：1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7。
//

// 提示：

// 1 <= grid.length, grid[i].length <= 15
// 0 <= grid[i][j] <= 100
// 最多 25 个单元格中有黄金。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let maxValue = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxValue = grid[i][j]
        ? Math.max(maxValue, getPointValue(grid, i, j))
        : maxValue;
    }
  }
  return maxValue;
};

const inGrid = (grid, i, j) => {
  if(i>=0 && i<grid.length && j>=0 && j<grid[0].length && grid[i][j]){
    return true;
  }
  return false
}

const getPointValue = (grid, i, j) => {
  let tempGrid = JSON.parse(JSON.stringify(grid))
  const pointValue = grid[i][j];
  tempGrid[i][j] = 0;

  const l = inGrid(tempGrid, i-1, j) ? getPointValue(tempGrid, i - 1, j) : 0;

  const r = inGrid(tempGrid, i + 1, j) ? getPointValue(tempGrid, i + 1, j) : 0;

  const u = inGrid(tempGrid, i, j - 1) ? getPointValue(tempGrid, i, j - 1) : 0;

  const t = inGrid(tempGrid, i, j + 1) ? getPointValue(tempGrid, i, j + 1) : 0;

  return pointValue + Math.max(l ,r ,u ,t)
};



// console.log(getPointValue([[0,6,0],[5,8,7],[0,9,0]], 2, 1))
console.log(getMaximumGold([[0, 6, 0], 
                            [5, 8, 7], 
                            [0, 9, 0]]));