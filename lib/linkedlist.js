'use strict';

var LinkedList = function() {
 this.head = new Node("head");

  this._Node = function(item) {
    this.element = element;
    this.next = null;
  };
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

LinkedList.prototype.findPrevious = function(item) {
  var currNode = this.head; //start at the beginning
  while (!(currNode.next === null) && (currNode.next.element != item)) {
    //while the next node isn't null AND the next element isn't what we're looking for
    currNode = currNode.next; //advance one up
  }
  return currNode; //when the next.element is what we're looking for, return current
  //because it's the previous node to the one we passed in
};

LinkedList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

/* Question 6-1:
    Implement the advance(n) function so that when executed, the current node is
    moved n nodes forward in the list.
*/

//[a][B][c][d]
//[a][c][d]
//[a][c][d][B]
LinkedList.prototype.advance = function(item, n) {
  var currNode = this.find(item); //locate the passed-in item
  var count = 0;
  this.remove(currNode); //remove it from its current position
  while (count < n) {
    insertHere = currNode.next;
    count++;
  }
  this.insert(currNode, insertHere); //insert it after insertHere
};
