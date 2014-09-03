/****************
Chapter 5 - Queues
****************/

/*
1:  Modify the Queue class to create a Deque class. A deque is a queue-like structure
    that allows elements to be added and removed from both the front and the back of
    the list. Test your class in a program.
*/
//MJG: Why does the "dequeue" assignment ask you to circumvent the queue's restraints?
//It has you add add to front and remove from back.

//MJG: How to find unpaired closed parens?

//MJG: Stack homework: palindrome example. Wouldn't a stack be more appropriate?
//Why make a queue act like a stack?

var Queue = require('../lib/queue');

Queue.prototype.addToFront = function(element) { //add to the front
  this.dataStore.unshift(element);
};

Queue.prototype.removeFromBack = function() { //remove from back
 return this.dataStore.pop();
};

var dequeue = new Queue();

/*
2.  Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.
*/
//MJG: Wouldn't a stack be more appropriate? What's the point of making a queue act like a stack?
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
