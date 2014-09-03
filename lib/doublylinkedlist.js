'use strict';

var LinkedList = function() {
 this.head = new Node("head");
};

this._Node = function(item) {
  this.element = element;
  this.next = null;
  this.prev = null;
};

LinkedList.prototype.find = function(item) {
  var currNode = this.head; //create a new node and assign it as the head node
  while (currNode.element != item) { //look for a match
    currNode = currNode.next; //if not a match, advance to the next node
  }
  return currNode; //when currNode.element == item, return currNode
};

//with insert, you specify which node to insert after (passed as "item")
LinkedList.prototype.insert = function(newElement, item) { //insert new element after existing node
  var newNode = new Node(newElement); //here's the new node as passed in by the function
  var current = this.find(item); //find existing node "item"
  newNode.next = current.next; //set the new node's next property to current node's next
  newNode.previous = current;
  current.next = newNode; //set the existing node's next to the new node
};

//loop through the linked list and console log each one
LinkedList.prototype.display = function() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

LinkedList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

LinkedList.prototype.findLast = function() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    currNode = currNode.next;
  }
  return currNode;
};

LinkedList.prototype.dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous === null)) {
    print(currNode.element);
    currNode = currNode.previous;
  }
}

/* Question 6-1:
    Implement the advance(n) function so that when executed, the current node is
    moved n nodes forward in the list.
*/


//[a][b][c][d][E]
//[a][b][c][d]
//[a][E][b][c][d]
LinkedList.prototype.back = function(item, n) {
  var currNode = this.find(item); //locate the passed-in item
  var count = 0;
  this.remove(currNode); //remove it from its current position
  while (count < n) {
    insertHere = currNode.previous;
    count++;
  }
  this.insert(currNode, insertHere); //insert it after insertHere
};
