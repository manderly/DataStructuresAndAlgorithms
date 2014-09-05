'use strict';

var Graph = function(v) {
  this.vertices = v;
  this.edges = 0;
  this.adjacencies = [];

  this.marked = [];
  this.edgeTo = [];
  this.vertexList = [];

//Fixme: don't need to make this for loop at the start of creating a graph
  for (var i = 0; i < this.vertices; ++i) { //for every vertex
    this.adjacencies[i] = []; //push empty array to vertex location in adjacencies array
  }

};

Graph.prototype.addVertex = function(data) { //Tyler's addVertex function from class
  //this.vertices.push({data: data, visited: false});
};

Graph.prototype.depthFirstSearch = function(v) { //pass in a vertex number
  this.marked[v] = true; //mark its index in the marked array true
  if (this.adjacencies[v] !== undefined ) { //if this vertex number exists in adjacencies
    console.log('Visited vertex: ' + this.vertexList[v]); //console log that it was visited
  }
  for (var i = 0; i < this.adjacencies[v].length; i++) {
    var w = this.adjacencies[v][i];
    if (!this.marked[w]) {
      this.depthFirstSearch(w);
    }
  }
};

Graph.prototype.addEdge = function(from,to) { //8,3 example data
  this.adjacencies[from].push(to); //puts 3 into index 8
  this.adjacencies[to].push(from);
  this.edges++;
};

//Prints the long list of city name connections with arrows -->
Graph.prototype.showGraph = function() {
  var visited = [];
  var str = "";
  for (var i = 0; i < this.vertices; ++i) {
    str += this.vertexList[i] + " -> "; //shows how each node connects to another
    visited.push(this.vertexList[i]);
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adjacencies[i][j] != undefined) {
        if (visited.indexOf(this.vertexList[j]) < 0) {
          str += this.vertexList[j] + ' ';
        }
      }
    }
    console.log(str);
    visited.pop();
  }
};

Graph.prototype.breadthFirstSearch = function(source) {
  var queue = [];
  queue.push(source);

  this.marked[source] = true;
  while (queue.length > 0) {
    var v = queue.shift();

    if (v !== undefined) {
      console.log('Visited vertex: ' + v);
    }

    for (var i = 0; i < this.adjacencies[v].length; i++) {
      var w = this.adjacencies[v][i];
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
};

/*
Top sort is like depth-first except it doesn't print the vertex as it visits them
Instead, the algorithm visits the adjacent vertices first and then pushes the current
vertex onto a stack.
*/

Graph.prototype.topSort = function() { //topological sort
  var stack = []; //this stack array will hold vertices?
  var visited = []; //create an array for visited vertices

  //first set all vertices to not visited (resetting things)
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }

  //now go through again, this time using topSortHelper on any unvisited vertices encountered
  for (var i = 0; i < this.vertices; i++) {
    if (visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }

  //vertices are in a stack now and we'll use that stack to console.log each of them
  for (var i = 0; i < stack.length; i++) {
    console.log("City " + i + ": " + this.vertexList[stack[i]]);
  }
};

Graph.prototype.topSortHelper = function(v, visited, stack) {
  //mark this vertice as visited, visit the adjacent ones
  visited[v] = true;
  for (var i = 0; i < this.adjacencies[v]; i ++) {
    var adjvertex = this.adjacencies[v][i]; //offby1 this was the missing line

    if (!visited[adjvertex]) {
      //re-run function on adjacent vertices to this one
      this.topSortHelper(visited[adjvertex], visited, stack); //this is where 0 gets set to false
    }
  }
  //console.log('about to push vertex (v): ' + v);
  stack.push(v); //push this vertex to the stack
};

Graph.prototype.pathTo = function(source, v) { //source and vertex come in from program file
  if (!this.hasPathTo(v)) { //if there's no path to the vertex, return undefined
    return undefined;
  }
  var shortestpath = []; //make an empty path array
  for (var i = v; i != source; i = this.edgeTo[i]) { //set i = to v, and push every path to the array
    shortestpath.push(i);
  }
  shortestpath.push(source); //push in the source ("0" in this test) last
  return shortestpath; //return the path array to the main file
};

Graph.prototype.hasPathTo = function(v) {
  return this.marked[v];
};

Graph.prototype.showPath = function(paths) {
  var str = '';
  var num = 0;
  while (paths.length > 0) {
    if (paths.length > 1) {
      num = paths.pop();
      str += num + " " + this.vertexList[num] + '--> '; //builds the string that gets displayed in console
    }
    else {
      num = paths.pop();
      str += num + " " + this.vertexList[num];
    }
  }
  console.log("Shortest path: " + str);
};

module.exports = Graph;
