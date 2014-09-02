/****************
Chapter 4 - Stacks
****************/

/*
3:  Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and
    you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one)
    to remove the yellow ones without changing the order of the other candies in the dispenser.
*/

var pezContents = ["r","w","w","y","w","r","r","r","y","w","r","y","w","y","y","r"];

function removeYellowPezCandies(pezContents) {
  //push everything from the pezContents array into pezNoYellow
  var pezNoYellow = new Stack();
  for (var i = 0; i < pezContents.length; ++i) {
    if (pezContents[i] != "y") {
      pezNoYellow.push(pezContents[i]);
      console.log("+ pushed a pez: " + pezContents[i]);
    }
  }
  var pezOriginalOrderNoYellow = new Stack();

  while (pezNoYellow.length() > 0) {
    pezOriginalOrderNoYellow.push(pezNoYellow.pop());
    console.log(pezOriginalOrderNoYellow.peek());
  }
}

removeYellowPezCandies(pezContents);

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


