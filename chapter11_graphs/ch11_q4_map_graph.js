var Graph = require('../graph');
var home = new Graph();

home.addEdge("Seattle", "Shoreline");
home.addEdge("Seattle", "SoDo");
home.addEdge("Shoreline", "Bothell");
home.addEdge("Bothell", "Kirkland");
home.addEdge("Bothell", "Lynnwood");
home.addEdge("Kirkland", "Bothell");
home.addEdge("Kirkland", "Bellevue");
home.addEdge("Bellevue", "SoDo");
home.showGraph();
/*
  Build a graph that models the map of the area where you live.
  Determine the shortest path from a starting vertex to the last vertex.
*/

//make a new graph
//enter vertices to represent cities:
//Seattle, Shoreline, Sodo, Kirkland, Bothell, Redmond, Bellevue, Renton and distances between
//Write a function that finds shortest path from a starting vertex to a last vertex

