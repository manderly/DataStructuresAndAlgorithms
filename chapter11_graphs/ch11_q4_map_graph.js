var Graph = require('../lib/graph');
var home = new Graph(10);

home.addEdge(0,1); //Seattle to Shoreline
home.addEdge(0,2); //Seattle to SoDo
home.addEdge(1,4); //Shoreline to Bothell
home.addEdge(2,3); //SoDo to Renton
home.addEdge(4,6); //Bothell to Lynnwood
home.addEdge(4,5); //Bothell to Kirkland
home.addEdge(5,4); //Kirkland to Bothell
home.addEdge(5,7); //Kirkland to Bellevue
home.addEdge(6,8); //Lynnwood to Everett
home.addEdge(7,3); //Bellevue to Renton
home.vertexList = ["Seattle","Shoreline","SoDo","Renton","Bothell","Kirkland","Lynnwood","Bellevue","Everett"];
home.showGraph();
home.topSort();
/*
  Build a graph that models the map of the area where you live.
  Determine the shortest path from a starting vertex to the last vertex.
*/

//make a new graph
//enter vertices to represent cities:
//Seattle, Shoreline, Sodo, Kirkland, Bothell, Redmond, Bellevue, Renton and distances between
//Write a function that finds shortest path from a starting vertex to a last vertex

