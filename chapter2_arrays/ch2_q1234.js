/****************
Chapter 2 - Arrays
****************/

/*
1:  Create a grades object that stores a set of student grades in an object. Provide a function for
    adding a grade and a function for displaying the student's grade average.
*/
console.log("CHAPTER 2: ARRAYS");
console.log("\nQuestion 1:");

function studentGrades() {
  this.grades = [];
  this.addGrade = addGrade;
  this.getAverage = getAverage;
}

function addGrade(grades) {
  this.grades.push(grades);
}

function getAverage() {
  var total = 0;
  for (var i = 0; i < this.grades.length; i++) {
    total += this.grades[i];
  }
  return total / this.grades.length;
}

var joeStudent = new studentGrades();
joeStudent.addGrade(89);
joeStudent.addGrade(92);
joeStudent.addGrade(98);
joeStudent.addGrade(91);
console.log("Joe Student's grades: " + joeStudent.grades);
console.log("Joe Student's grade average: " + joeStudent.getAverage());

/*
2:  Store a set of words in an array and display the contents both forward and backward.
*/

console.log("\nQuestion 2:");

var words = ["madman", "in", "a", "box"];
console.log(words);
console.log(words.reverse());

/*
3: Modify the weeklyTemps object in the chapter so that it stores a month's worth of data
  using a two-dimensional array. Create functions to display the monthly average,
  a specific week's average, and all the weeks' averages.
*/
console.log("\nQuestion 3:");

function weeklyTemps() {
  this.month = []; //[[n,n,n,n,n,n,n],[n,n,n,n,n,n,n],[...]] //each index holds a week's worth of temps
  this.addWeekTemps = addWeekTemps;
  this.monthAverage = monthAverage;
  this.weekAverage = weekAverage;
  this.allWeekAverages = allWeekAverages;
}

function addWeekTemps(weekTemps) {
  this.month.push(weekTemps);
}

function monthAverage() {
  var total = 0;
  var average = 0.0;

  for (var weekNum = 0; weekNum < this.month.length; weekNum ++) {
    total += this.weekAverage(weekNum);
  }
  average = total / this.month.length;
  return Math.floor(average);
}


function weekAverage(week) {
  //iterate through all the days in the given week, find the average
  var total = 0; //note to self: must declare as a number because we use +=
  var average = 0.0;

  for (var day = 0; day < this.month[week].length; day++) {
    total += this.month[week][day]; //this is where it dies, becomes NaN
  }
  average = total / this.month[week].length;
  return Math.floor(average);
}

function allWeekAverages() {
  var total = 0;
  var average = 0.0;

  for (var weekNum = 0; weekNum < this.month.length; weekNum ++) {
    console.log("Week " + weekNum + "'s average temp: " + this.weekAverage(weekNum));
  }
}

//create a new month
var january = new weeklyTemps();
//create a 31 day month of temps
january.addWeekTemps([16]); //week 0
january.addWeekTemps([20,15,22,22,17,18,20]); //week 1
january.addWeekTemps([22,19,24,30,32,33,30]); //week 2
january.addWeekTemps([32,33,36,33,31,36,32]); //week 3
january.addWeekTemps([32,33,36,33,31,36,32]); //week 4
january.addWeekTemps([36]); //week 5

//challenge 1: average temp of a specific week
var specificWeek = 3;
console.log("Week " + specificWeek + "'s average temp:" + january.weekAverage(specificWeek));

//challenge 2: average temp of the entire month
console.log("Entire month's average temperature: " + january.monthAverage());

//challenge 3: average temp of each of the month's weeks, displayed individually:
january.allWeekAverages();

/*
4:  Create an object that stores individual letters in an array
    and has a function for displaying the letters as a single word.
*/

function letterObject() {
  this.letters = [];
  this.add = add;
  this.toWord = toWord;
}

function add(letter) {
  this.letters.push(letter);
}

function toWord() {
  var word = "";
  for (var i = 0; i < this.letters.length; i++) {
    word += this.letters[i];
  }
  return word;
}

phrase = new letterObject();
phrase.add("R");
phrase.add("O");
phrase.add("F");
phrase.add("L");
console.log("Completed word: " + phrase.toWord());

