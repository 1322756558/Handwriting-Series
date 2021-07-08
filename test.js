/*
 * @Autor: junhui li
 * @Date: 2021-07-02 10:02:36
 * @LastEditors: junhui li
 * @LastEditTime: 2021-07-06 17:59:57
 * @Description: 
 */
// 冒泡
function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(bubbleSort(arr));

// 快排
function quickSort(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  if (arr.length < 2) { return arr; }

  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(quickSort(arr));
function quickSort1(arr){
  left = []
  right = []
  thisNum = 0

  if(arr.length < 2){
    return arr
  }

  this.thisNum = arr[0]

  arr.forEach(ele => {
    if(ele < this.thisNum){
      left.push(ele)
    }else{
      right.push(ele)
    }
  });

  return quickSort1(left).concat([thisNum], quickSort1(right))
}


function bubbleSort1(arr){
  let newArr = arr
  for(let i=newArr.length-1; i>0; i--){
    for(let j=0; j<i; j++){
      if(newArr[j] > newArr[i]){
        [newArr[j], newArr[i]] = [newArr[i], newArr[j]]
      }
    }
  }

  return newArr
}

// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(11, bubbleSort1(arr));

// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(arr.shift())
// console.log(arr.pop())

// let stringCount = (str)=>{
//   countDir = {}
//   let stringArr = [...str]
// }

// var s = new Set([1, 2, 3, 3, '3']);
// console.log(s)

function mapCountString(arr){
  const mapString = new Map()
  const arrString = [...arr]

  arrString.forEach(str => {
    if(mapString.has(str)){
      mapString.set(str, mapString.get(str) + 1)
    }else{
      mapString.set(str, 1)
    }
  })

  console.log(mapString)
}

// reverse

// // mapCountString('aabbasdfsdfsdf')
// console.log(['a', 'b', 'c'].join('-'))

function debounce(fn, delay) {
  var timer; // 维护一个 timer
  return function () {
      var _this = this; // 取debounce执行作用域的this
      var args = arguments;
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(function () {
          fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
      }, delay);
  };
}

// test
// function testDebounce(e, content) {
//   console.log(e, content);
// }
// var testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
// document.onmousemove = function (e) {
//   testDebounceFn(e, 'debounce'); // 给防抖函数传参
// }

// function debounce(fn, wait){
//   let timeout;
//   return function(){
//     const _this = this
//     const arg = arguments
//     clearTimeout(timeout)
//     timeout = setTimeout(fn.apply(_this, arg), wait)
//   }
// }

function quickSort2(arr){
  left = []
  right = []
  thisNum = 0

  if(arr.length < 2){
    return arr
  }

  this.thisNum = arr[0]

  arr.forEach(ele => {
    if(ele < this.thisNum){
      left.push(ele)
    }else{
      right.push(ele)
    }
  });

  return quickSort1(left).concat([thisNum], quickSort1(right))
}

// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(11, quickSort2(arr));


function sort(arr){
  let thisNum;
  let left = []
  let right = []
  console.log(arr)
  if(arr.length < 2){
    return arr
  }

  thisNum = arr[0]
  for(let i = 0; i < thisNum; i++){
    if(arr[i]<thisNum){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return sort(left).concat([thisNum], sort(right))
}



// sort()

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(11, sort(arr));

function binaryFind(arr, target, start, end){

}