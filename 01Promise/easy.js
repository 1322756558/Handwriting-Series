/*
 * @Autor: junhui li
 * @Date: 2021-06-29 15:31:13
 * @LastEditors: junhui li
 * @LastEditTime: 2021-06-29 16:11:01
 * @Description: 
 */
// const promise = new Promise(function(resolve, reject) {
//   // ... some code

//   if (/* 异步操作成功 */){
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// promise.then(data => {
//     console.log('请求成功')
// }, err => {
//     console.log('请求失败'）
// })

class Promise {
  // 记录状态，pending, fulfilled, rejected 状态为rejected时then不应当被加入数组， 直接执行
  state = 'pending'
  value = undefined
  // 可能会有多个then
  callBack = []
  constructor(fn){
    fn(this._resolve.bind(this))
  }
  _resolve(value){
    // 确保在同步任务的最后执行，当传入函数无异步任务时then不会执行，此时callBack为空
    setTimeout(()=>{
      this.state = 'rejected'
      this.value = value
      this.callBack.forEach(fn => fn(value))
    })
  }
  then(fn){
    // 当状态为完成时立即执行then里的内容
    if(this.state !== 'rejected'){
      this.callBack.push(fn)
    }else{
      fn(this.value)
    }
    return this
  }
}

// let p = new Promise(resolve => {
//   console.log('同步执行');
//   resolve('同步执行');
// }).then(tip => {
//   console.log('then1', tip);
// }).then(tip => {
//   console.log('then2', tip);
// });

// setTimeout(() => {
//   p.then(tip => {
//       console.log('then3', tip);
//   })
// });

let p = new Promise(resolve => {
  setTimeout(() => {
      console.log('done');
      resolve('5秒');
  }, 5000);
}).then(tip => {
  console.log('then1', tip);
}).then(tip => {
  console.log('then2', tip);
});


