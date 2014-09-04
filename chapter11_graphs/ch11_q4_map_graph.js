var Graph = require('../lib/graph');
var home = new Graph(12); //number passed here is number of vertices in this graph

//create all the connection edges
//Question: do I need to create the connections in both directions?
//Answer: You do need at least every city represented as the first parameter
home.addEdge(0,1); //Seattle to Shoreline
home.addEdge(0,2); //Seattle to SoDo
home.addEdge(1,4); //Shoreline to Bothell
home.addEdge(2,3); //SoDo to Renton
home.addEdge(3,10); //Renton to Olympia
home.addEdge(4,6); //Bothell to Lynnwood
home.addEdge(4,5); //Bothell to Kirkland
home.addEdge(5,4); //Kirkland to Bothell
home.addEdge(5,7); //Kirkland to Bellevue
home.addEdge(5,11); //Kirkland to Redmond
home.addEdge(6,8); //Lynnwood to Everett
home.addEdge(7,3); //Bellevue to Renton
home.addEdge(7,9); //Bellevue to Issaquah
home.addEdge(8,6); //Everett to Lynnwood
home.addEdge(9,7); //Issaquah to Bellevue
home.addEdge(10,3); //Olympia to Renton
home.addEdge(11,5); //Redmond to Kirkland
home.vertexList = ["Seattle","Shoreline","SoDo", //0 1 2
                    "Renton","Bothell","Kirkland", //3 4 5
                    "Lynnwood","Bellevue","Everett", //6 7 8
                    "Issaquah","Olympia","Redmond"]; //9 10 11
//home.showGraph();
home.topSort();
home.bfs(0); //start in seattle
var vertex = 8; //everett is destination
var source = 0;
var paths = home.pathTo(source, vertex);
home.showPath(paths); //expected outcome:0 1 4 6 8 (Seattle, Shoreline, Bothell, Lynnwood, Everett)


/*
  Build a graph that models the map of the area where you live.
  Determine the shortest path from a starting vertex to the last vertex.
*/

//make a new graph
//enter vertices to represent cities:
//Seattle, Shoreline, Sodo, Kirkland, Bothell, Redmond, Bellevue, Renton and distances between
//Write a function that finds shortest path from a starting vertex to a last vertex

