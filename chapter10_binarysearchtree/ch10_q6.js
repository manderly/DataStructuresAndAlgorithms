/****************
Chapter 10 - Binary Search Tree
****************/

/*
6:  Write a program that stores the words from a large text file in a BST and
    displays the number of times each word occurs in the text.
*/

var BST = require('../lib/binarysearchtree');
var wordsBST = new BST();

//create a text file with words in it
var words = ["quack","quack","woof","meow","quack",
              "hiss","hiss","squeak","woof","woof",
              "meow","whimper","growl","lol","arf"]; //15 total, 8 uniques, woof is the most common

//create a BST with those words
function createBST(words) {
  for (var i = 0; i < words.length; i++) {
    wordsBST.insert(words[i]);
    console.log('inserting ' + words[i]);
  }
}
createBST(words);

//1.  Add a function to the BST class that counts the number of nodes in a BST.
console.log("There are " + wordsBST.countNodes(wordsBST.root) + " nodes in this binary search tree.");

//2. Add a function to the BST class that counts the number of edges in a BST.
console.log("There are " + wordsBST.countEdges(wordsBST.root) + " edges in this binary search tree.");

//3. Add a max() function to the BST class that finds the maximum value in a BST.
console.log("The maximum value in this binary search tree is " + wordsBST.max());

//4. Add a min() function to the BST class that finds the minimum value in a BST.
console.log("The minimum value in this binary search tree is " + wordsBST.min());
