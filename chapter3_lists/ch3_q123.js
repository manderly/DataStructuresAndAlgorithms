/****************
Chapter 3 - List
****************/

/*
1:  Write a function that inserts an element into a list only if the element to be inserted is larger
    than any of the elements in the list. Larger can mean either greater than when working with numeric
    values, or further down in the alphabet, when working with textual values.
2:  Write a function that inserts an element into a list only if the element to be inserted
    is smaller than any of the elements currently in the list.
*/

function List() {
  this.listSize = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.appendIfLarger = appendIfLarger;
  this.appendIfSmaller = appendIfSmaller;
  this.largest;
  this.smallest;
}

function appendIfLarger(element) {
  if (this.dataStore.length === 0 || element > this.largest) {
    this.largest = element;
    this.dataStore[this.listSize++] = element;
  }
}

function appendIfSmaller(element) {
  if (this.dataStore.length === 0 || element < this.smallest) {
    console.log("length is: " + this.dataStore.length);
    this.smallest = element;
    this.dataStore[this.listSize++] = element;
  }
}

//testing for challenges 1 and 2
var list = new List();
var testAppendLetters = ["m","e","o","q","c","j","s","b","q"];
var testAppendNumbers = [55,6,3,116,205,999,40,8,14,0];

for (var i = 0; i < testAppendLetters.length; i++) {
  list.appendIfLarger(testAppendLetters[i]);
}
console.log("appendIfLarger results: " + list.dataStore);

/*
3:  Create a Person class that stores a person’s name and their gender.
    Create a list of at least 10 Person objects.
    Write a function that displays all the people in the list of the same gender.
*/

function Person(name,gender) {
  this.name = name;
  this.gender = gender;
}


function PeopleList() {
  this.dataStore = [];
  this.listSize = 0;
  this.add = add;
  this.findPeopleOfGender = findPeopleOfGender;
}

function add(element) {
  this.dataStore[this.listSize++] = element;
}

function findPeopleOfGender(gender) {
  for (var i = 0; i < this.dataStore.length; i ++ ) {
    if (this.dataStore[i].gender == gender) {
      console.log(this.dataStore[i].name);
    }
  }
}

var people = new PeopleList();
people.add(new Person("Gadget","f"));
people.add(new Person("Mandi","f"));
people.add(new Person("Dad","m"));
people.add(new Person("Jim","m"));
people.add(new Person("The Doctor","m"));

people.findPeopleOfGender("m");


