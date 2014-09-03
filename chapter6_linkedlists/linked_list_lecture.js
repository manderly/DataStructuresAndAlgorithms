LinkedListStack.prototype.isEmpty = function() {
  return (this._first === null);
};

LinkedListStack.prototype.push = function(item) {
  var oldfirst = this._first;
  this._first = this._Node(item);
  this._first.next = oldfirst;
};

//stack has: push, pop, peek, clear, isempty
  //linked list has: next, head, insert, remove, new
    //node: element, next, new
//you can use an array or a linkedList to implement a stack
