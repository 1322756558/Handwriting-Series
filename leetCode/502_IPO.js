// 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

// 给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。

// 最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

// 总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。

// 答案保证在 32 位有符号整数范围内。

//  

// 示例 1：

// 输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// 输出：4
// 解释：
// 由于你的初始资本为 0，你仅可以从 0 号项目开始。
// 在完成后，你将获得 1 的利润，你的总资本将变为 1。
// 此时你可以选择开始 1 号或 2 号项目。
// 由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
// 因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。
// 示例 2：

// 输入：k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// 输出：6
//  

// 提示：

// 1 <= k <= 105
// 0 <= w <= 109
// n == profits.length
// n == capital.length
// 1 <= n <= 105
// 0 <= profits[i] <= 104
// 0 <= capital[i] <= 109

// 性能较差，需要多次循环找出利润最大的值
/**
 * @param {number} k 至多k个项目
 * @param {number} w 初始资本
 * @param {number[]} profits 利润
 * @param {number[]} capital 启动成本
 * @return {number}
 */
 var findMaximizedCapital = function(k, w, profits, capital) {
  let profitsCount = w
  let count = k
  while(count > 0){
    let maxProfits = 0
    let maxI = 0
    for(let i=0; i<capital.length; i++){
      if(capital[i] <= profitsCount){
        if(profits[i] > maxProfits){
          maxI = i
          maxProfits = profits[i]
        }
      }
    }

    if(maxProfits > 0){
      profitsCount += profits[maxI]

      profits[maxI] = profits[profits.length - 1]
      profits.pop()

      capital[maxI] = capital[capital.length - 1]
      capital.pop()

      count--
    }else{
      return profitsCount
    }
  }

  return profitsCount
};


// 较优解， 利用Map对象排序后取值
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
 var findMaximizedCapital = function(k, w, profits, capital) {
  const map = new Map()
  for (let i=0; i<profits.length; ++i) {
    if (!map.has(profits[i])) map.set(profits[i], [])
    map.get(profits[i]).push(capital[i])
  }
  for (let i of map.values()) i.sort((a, b) => b - a) // 所有成本数组降序
  const arr = Array.from(map.keys()) // 取利润作为数组
  arr.sort((a, b) => b - a) // 利润降序
  for (let i=0; i<k; ++i) {
    if (arr.length === 0) break // 这里做一个保护，一旦项目执行完了要提前跳出，防止 k 大于项目数的情况
    let maxProfit = -1, index = -1
    for (let j=0; j<arr.length; ++j) {
      if (map.get(arr[j])[map.get(arr[j]).length-1] > w) continue // 资本不够本组项目
      maxProfit = arr[j] // 取到最大利润
      index = j // 取到最大利润位置
      break // 后面的利润只会更小 不考虑了
    }
    if (index === -1) break // 没有可完成的项目了，跳出
    w += maxProfit // 利润入账
    if (map.get(maxProfit).length === 1) { // 这个组的项目做完了
      map.delete(maxProfit) // 该组删除
      arr.splice(index, 1) // 在数组的索引也删掉
    } else map.get(maxProfit).pop() // 否则，把成本最小的去了（由于利润是纯利润，这里也可以不去最小的，但去除最小的作为贪心是不会错的。）
  }
  return w
};
console.log(findMaximizedCapital(2, 0, [1,2,3], [0,1,1]))