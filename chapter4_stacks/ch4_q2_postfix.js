/****************
Chapter 4 - Stacks
****************/

/*
2:  A postfix expression evaluator works on arithmetic expressions taking the following form:
    op1 op2 operator
    Using two stacks—one for the operands and one for the operators—design and
    implement a JavaScript function that converts infix expressions to postfix
    expressions, and then use the stacks to evaluate the expression.
*/

//stack 1: operands ( X Y )
//stack 2: operators ( + - )

//function: convert an infix (X+Y) to a postfix (X Y +)
//function: evaluate the expression

var Stack = require('../lib/stack');

var input = "1+2";
var operands = new Stack();
var operators = new Stack();

function convertInfixToPostfix(input) {
  for (var i = 0; i < input.length; i ++) {
    console.log(input[i]);
  }
}

convertInfixToPostfix(input);

