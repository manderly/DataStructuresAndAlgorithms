/****************
Chapter 5 - Queues
****************/

/*
1:  Modify the Queue class to create a Deque class. A deque is a queue-like structure
    that allows elements to be added and removed from both the front and the back of
    the list. Test your class in a program.
*/

//MJG: Why does this assignment ask you to circumvent the queue's restraints?

function Dequeue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.addToFront = addToFront;
  this.dequeue = dequeue;
  this.removeFromBack = removeFromBack;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) { //add to the back
 this.dataStore.push(element);
}

function addToFront(element) { //add to the front
  this.dataStore.unshift(element);
}

function dequeue() { //remove from front
 return this.dataStore.shift();
}

function removeFromBack() { //remove from back
 return this.dataStore.pop();
}

function front() {
 return this.dataStore[0];
}

function back() {
 return this.dataStore[this.dataStore.length-1];
}

function toString() {
 var retStr = "";
 for (var i = 0; i < this.dataStore.length; ++i) {
  retStr += this.dataStore[i] + "\n";
 }
 return retStr;
}

function empty() {
  if (this.dataStore.length == 0) {
   return true;
} else {
  return false;
 }
}

/*
2.  Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.
*/
//MJG: Wouldn't a stack be more appropriate? What's the point of making a queue act like a stack?
var dequeue = new Dequeue();
var word = "racecar";

function isPalindrome(testword) {
  for (var i = 0; i < testword.length; i++) {
    dequeue.enqueue(testword[i]);
  }
  var rword = "";
  for (var j = 0; j < testword.length; j++) {
    rword += dequeue.removeFromBack();
  }

  if (rword === word) {
    console.log(word + " is a palindrome!");
  } else {
    console.log(word + " is not a palindrome.");
  }
}

isPalindrome(word);
