'use strict';

var BST = function() {
  this.root = null;

//embed _Node inside BST so it comes with when BST is created
  this._Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  };
};

_Node.prototype.show = function() {
  return this.data;
};

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
};

BST.prototype.preOrder = function(node) {
  if (node !== null) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
};

BST.prototype.postOrder = function(node) { //use post order when traversing for removal
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
};

BST.prototype.remove = function(data) {
  root = removeNode(this.root, data);
};

BST.prototype.removeNode = function(node, data) {
  if (node === null) {
    return null;
  }
  if (data == node.data) {
    //node has no children
    if (node.left === null && node.right === null) {
      return null;
    }
    //node has no left child
    if (node.left === null) {

    }
}

module.exports = BST;

/*

1. Add a function to the BST class that counts the number of nodes in a BST.
Go InOrder, count each node we find

2. Add a function to the BST class that counts the number of edges in a BST.
Traverse the tree in order, answer is one less than the number of nodes

3. Add a max() function to the BST class that finds the maximum value in a BST.

4. Add a min() function to the BST class that finds the minimum value in a BST.

5. Write a program that stores the words from a large text file in a BST and displays
  the number of times each word occurs in the text.


