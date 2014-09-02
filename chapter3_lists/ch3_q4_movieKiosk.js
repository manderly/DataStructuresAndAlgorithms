var fs = require('fs');
/*
4:  Modify the video-rental kiosk program so that when a movie is checked
    out it is added to a list of rented movies. Display this list whenever a
    customer checks out a movie.
*/

// .. challenge 4 snippet .. //

var checkedOutMoviesList = new List();

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
    checkedOutMoviesList.append(movie); //new line
    checkedOurMoviesList.displayList(); //new line
  } else {
    console.log(movie + " is not available.");
  }
}

// .. challenge 5 snippet .. //

function checkIn(movie, filmList) {
  if (checkedOutMoviesList.contains(movie)) {
    filmList.add(movie);
    checkedOutMoviesList.remove(movie);
  } else {
    console.log(movie + " is not checked out.");
  }
}
