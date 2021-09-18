// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let box = new Array(9).fill(0).map(() => new Array());
  let row = new Array(9).fill(0).map(() => new Array());
  let col = new Array(9).fill(0).map(() => new Array());
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[0].length; j++){
      if(board[i][j] != '.'){
        row[i].push(board[i][j])
        col[j].push(board[i][j])

        let rn = Math.floor(i/3)
        let cn = Math.floor(j/3) * 3

        box[rn + cn].push(board[i][j])
      }
    }
  }

  // console.log
  for(let i=0; i<box.length; i++){
    let length = box[i].length
    let setLen = new Set(box[i]).size
    if(length != setLen){
      return false
    }
  }

  for(let i=0; i<row.length; i++){
    let length = row[i].length
    let setLen = new Set(row[i]).size
    if(length != setLen){
      return false
    }
  }

  for(let i=0; i<col.length; i++){
    let length = col[i].length
    let setLen = new Set(col[i]).size
    if(length != setLen){
      return false
    }
  }

  return true
};

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))