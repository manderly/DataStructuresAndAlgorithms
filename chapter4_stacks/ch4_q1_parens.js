/****************
Chapter 4 - Stacks
****************/

/*
1:  A stack can be used to ensure that an arithmetic expression has balanced parentheses.
    Write a function that takes an arithmetic expression as an argument and returns the postion
    in the expression where a parenthesis is missing. An example of an arithmetic expression
    with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24 + 1
*/

/*  From Ivan: the missing parenthisis finder could console.log
    a string saying Found unmatched ) at position 2 or found unmatched (
    at position 3 or no unmatched parentheses
*/
var Stack = require('../lib/stack');

var s = new Stack();
var expression = "2.3 + (23 / 12 + 3.14159 * .24";

missingParen(expression);

function missingParen(expression) {
  var s = new Stack();

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      s.push(i);
    }

    if (expression[i] === ")") {
      if (s.pop() === undefined) { //if there's nothing to pop, then this ) wasn't preceeded by a (
        console.log("Mismatched ) at " + i); //return the index of )
      }
    }
  }

  if (s.length() === 0) { //if the stack length is 0, all the ( ) found were paired
    console.log("no mismatched parens!");
  } else if (s.length() === 1) {
    console.log("Mismatched ( at position " + s.peek());
  }
}
