/*
 * @Autor: junhui li
 * @Date: 2021-07-08 16:21:10
 * @LastEditors: junhui li
 * @LastEditTime: 2021-07-08 19:18:13
 * @Description: 二叉树
 */

function Node(data, left, right){
  this.left = left
  this.right = right
  this.data = data
  
  this.show = () => this.data
}

function insert(data){
  let node = new Node(data, null, null)
  if(this.root === null){
    this.root = node
  }else{
    let current = this.root
    while (true) {
      if(data < current.data){
        // parent = current
        if(current.left === null){
          current.left = node
          break;
        }else{
          current = current.left
        }
      }else{
        if(current.right === null){
          current.right = node
          break;
        }else{
          current = current.right
        }
      }
    }
  }
}

function BST(){
  this.root = null
  this.insert = insert
}

var bst = new BST()
bst.insert(10);
bst.insert(8);
bst.insert(2);
bst.insert(7);
bst.insert(5);

