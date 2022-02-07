// 如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。

// 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：

// s 是一个尽可能长的快乐字符串。
// s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
// s 中只含有 'a'、'b' 、'c' 三种字母。
// 如果不存在这样的字符串 s ，请返回一个空字符串 ""。

// 示例 1：

// 输入：a = 1, b = 1, c = 7
// 输出："ccaccbcc"
// 解释："ccbccacc" 也是一种正确答案。
// 示例 2：

// 输入：a = 2, b = 2, c = 1
// 输出："aabbc"
// 示例 3：

// 输入：a = 7, b = 1, c = 0
// 输出："aabaa"
// 解释：这是该测试用例的唯一正确答案。
//  

// 提示：

// 0 <= a, b, c <= 100
// a + b + c > 0


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
 var longestDiverseString = function(a, b, c) {
  const obj = {
    'a': a,
    'b': b,
    'c': c
  }
  let str = ''
  let usedArr = []
  while(true) {
    if((obj.a >= obj.b || usedArr.indexOf('b') > -1) && (obj.a >= obj.c || usedArr.indexOf('c') > -1) && usedArr.indexOf('a') === -1 && obj.a!=0) {
      if(isDiverseString(str + 'a')) {
        str = str + 'a'
        obj.a--
        usedArr=[]
      }else{
        usedArr.push('a')
      }
    }else if((obj.b >= obj.a || usedArr.indexOf('a') > -1) && (obj.b >= obj.c || usedArr.indexOf('c') > -1) && usedArr.indexOf('b') === -1 && obj.b!=0) {
      if(isDiverseString(str + 'b')) {
        str = str + 'b'
        obj.b--
        usedArr=[]
      }else{
        usedArr.push('b')
      }
    }else if((obj.c >= obj.a || usedArr.indexOf('a') > -1) && (obj.c >= obj.b || usedArr.indexOf('b') > -1) && usedArr.indexOf('c') === -1 && obj.c!=0) {
      if(isDiverseString(str + 'c')) {
        str = str + 'c'
        obj.c--
        usedArr=[]
      }else{
        usedArr.push('c')
      }
    }else{
      break
    }

    
  }

  return str
  
};

const isDiverseString = (str) => {
  let len = str.length
  if(len < 3) {
    return true
  }

  if(str[len - 1] === str[len - 2] && str[len - 2] === str[len - 3]) {
    return false
  }

  return true
}

// 标准解------------------------
var longestDiverseString = function(a, b, c) {
  const res = [];
  const arr = [[a, 'a'], [b, 'b'], [c, 'c']];
  
  while (true) {
      arr.sort((a, b) => b[0] - a[0]);
      let hasNext = false;
      for (const [i, [c, ch]] of arr.entries()) {
          if (c <= 0) {
              break;
          }
          const m = res.length;
          if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
              continue;
          }
          hasNext = true;
          res.push(ch);
          arr[i][0]--;
          break;
      }
      if (!hasNext) {
          break;
      }
  }
  
  return res.join('');
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/longest-happy-string/solution/zui-chang-kuai-le-zi-fu-chuan-by-leetcod-5nde/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(longestDiverseString(1,1,7))

