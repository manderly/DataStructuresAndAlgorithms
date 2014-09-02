var Stack = function() {
 this.dataStore = [];
 this.top = 0;
}

Stack.prototype.push(element) {
 this.dataStore[this.top++] = element;
}

Stack.prototype.peek() {
 return this.dataStore[this.top-1];
}

Stack.prototype.pop() {
 return this.dataStore[--this.top];
}

Stack.prototype.clear() {
 this.top = 0;
 this.dataStore.length = 0;
}

Stack.prototype.length() {
 return this.top;
}
