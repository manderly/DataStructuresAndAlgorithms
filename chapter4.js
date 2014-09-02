/****************
Chapter 4 - Stacks
****************/

/*
1:  A stack can be used to ensure that an arithmetic expression has balanced parentheses.
    Write a function that takes an arithmetic expression as an argument and returns the postion
    in the expression where a parenthesis is missing. An example of an arithmetic expression
    with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24 + 1
*/
//MJG note - I can't figure out how to solve this one

var s = new Stack();
var expression = "2.3 + 23 / 12 + (3.14159 * .24";

missingParen(expression);

function missingParen(expression) {
  var parenCount = 0;
  var parenStack = new Stack();
/*  From Ivan: the missing parenthisis finder could console.log
    a string saying Found unmatched ) at position 2 or found unmatched (
    at position 3 or no unmatched parentheses
*/

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      parenCount ++;
      parenStack.push(i);
    } else if (expression[i] === ")") {
      parenCount --;
      parenStack.pop();
    }
  }
  if (parenCount === 0) {
    console.log("No unmatched parenthesis!");
  } else {
    console.log("Mismatched ( at position " + parenStack.peek());
  }
}
//MJG question: how to check for unmatched ) ?

function Stack() {
 this.dataStore = [];
 this.top = 0;
 this.push = push;
 this.pop = pop;
 this.peek = peek;
 this.clear = clear;
 this.length = length;
}

function push(element) {
 this.dataStore[this.top++] = element;
}

function peek() {
 return this.dataStore[this.top-1];
}

function pop() {
 return this.dataStore[--this.top];
}

function clear() {
 this.top = 0;
 this.dataStore.length = 0;
}

function length() {
 return this.top;
}


