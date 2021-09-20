// 给定一个未排序的整数数组，找到最长递增子序列的个数。

// 示例 1:

// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
// 示例 2:

// 输入: [2,2,2,2,2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
// 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

var findNumberOfLIS = function(nums) {
  const d = [];
  const cnt = [];
  for (const v of nums) {
      const i = binarySearch1(d.length, d, v);
      let c = 1;
      if (i > 0) {
          const k = binarySearch2(d[i - 1].length, d[i - 1], v);
          c = cnt[i - 1][cnt[i - 1].length - 1] - cnt[i - 1][k];
          
          // console.log(cnt, i)
      }
      if (i === d.length) {
          const dList = [];
          dList.push(v);
          d.push(dList);
          const cntList = [];
          cntList.push(0);
          cntList.push(c);
          cnt.push(cntList);
      } else {
          d[i].push(v);
          const cntSize = cnt[i].length;
          cnt[i].push(cnt[i][cntSize - 1] + c);
      }
  }

  const size1 = cnt.length, size2 = cnt[size1 - 1].length;
  return cnt[size1 - 1][size2 - 1];
}

const binarySearch1 = (n, d, target) => {
  let l = 0, r = n;
  while (l < r) {
      const mid = Math.floor((l + r) / 2);
      const list = d[mid];
      if (list[list.length - 1] >= target) {
          r = mid;
      } else {
          l = mid + 1;
      }
  }
  return l;
}

const binarySearch2 = (n, list, target) => {
  let l = 0, r = n;
  while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (list[mid] < target) {
          r = mid;
      } else {
          l = mid + 1;
      }
  }
  return l;
}

console.log(findNumberOfLIS([[1,3,5,4,7]]))