'use strict';

var BST = function() {
  this.root = null;

//embed _Node inside BST so it comes with when BST is created
  this._Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  };

  this._Node.prototype.show = function() {
    return this.data;
  };
};


BST.prototype.insert = function(data) {
  var n = new this._Node(data, null, null);
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
};

/*
1.  Add a function to the BST class that counts the number of nodes in a BST.
*/

BST.prototype.countNodes = function() {
  var count = 0;
  var currNode = this.root;
  while (currNode !== null) {
    count ++;
    currNode = currNode.left;
  }
  return count;
};

/*
2. Add a function to the BST class that counts the number of edges in a BST.
Traverse the tree in order, answer is one less than the number of nodes
*/

BST.prototype.countEdges = function(node) {
  var edgeCount = 0;
  return this.countNodes() -1;
};

/*
3. Add a max() function to the BST class that finds the maximum value in a BST.
*/
//Since the larger value is always to the right, just traverse to the end.

BST.prototype.max = function(node) {
  var currNode = this.root; //set the max to zero to start, on the assumption all nodes are positive nums
  while (currNode.right !== null) {
    currNode = currNode.right;
  }
  return currNode.data;
};

/*
4. Add a min() function to the BST class that finds the minimum value in a BST.
*/

//since the smaller value is always to the left, we only have to traverse left
BST.prototype.min = function() {
  var currNode = this.root;
  while (currNode.left !== null) {
    currNode = currNode.left;
  }
  return currNode.data;
};

module.exports = BST;
