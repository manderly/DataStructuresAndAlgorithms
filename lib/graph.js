'use strict';

var Vertex = function(label) {
    this.label = label;
  };

var Graph = function(v) {
  this.vertices = v;
  this.edges = 0;
  this.adjacencies = [];

  this.marked = [];
  this.edgeTo = [];
  this.vertexList = []; //gets filled with city names

  for (var i = 0; i < this.vertices; ++i) { //for every vertex
    this.adjacencies[i] = []; //and push empty string to it
    this.marked[i] = false; //in the marked array, set the matching index to false
  }
};

//depth first search
Graph.prototype.dfs = function(v) { //pass in a vertex number
  this.marked[v] = true; //mark its index in the marked array true
  if (this.adjacencies[v] !== undefined ) { //if this vertex number exists in adjacencies
    console.log('Visited vertex: ' + this.vertexList[v]); //console log that it was visited
  }
  for (var i = 0; i < this.adjacencies[v].length; i++) { //adjacencies[v] undefined!
    var w = this.adjacencies[v][i];
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
};

Graph.prototype.addEdge = function(from,to) {
  this.adjacencies[from].push(to);
  this.adjacencies[to].push(from);
  this.edges++;
};

/*
Graph.prototype.showGraph = function() {
  var i,j;
  for (i = 0; i < this.vertices; ++i) {
    console.log(i + '->');
    for (j = 0; j < this.vertices; ++j) {
      if (this.adjacencies[i][j] !== undefined) {
        console.log(this.adjacencies[i][j] + ' ');
      }
    }
    console.log('\n');
  }
};
*/

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

//breadth first search
Graph.prototype.bfs = function(source) {
  var queue = [];
  this.marked[source] = true;
  queue.push(source);
  while (queue.length > 0) {
    var v = queue.shift(); //remove from front of queue

    if (v !== undefined) {
      console.log('Visited vertex ' + v);
    }

    for (var i = 0; i < this.adjacencies[v].length; i++) { //can't find adjacencies[v].length
      var w = this.adjacencies[v][i];
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
};

Graph.prototype.topSort = function() { //topological sort
  var stack = []; //create a new stack and make it empty
  var visited = []; //create an array for visited vertices
  for (var i = 0; i < this.vertices; i++) { //loop through all the vertices
    visited[i] = false; //set each one visited to false (resetting things)
  }
  for (var i = 0; i < this.vertices; i++) { //now loop through again
    if (visited[i] == false) { //if the vertex hasn't been visited
      this.topSortHelper(i, visited, stack); //use the topSortHelper function on it
    }
  }
  for (var i = 0; i < stack.length; i++) { //now that we've put things in the stack (topSortHelper)
    if (stack[i] != undefined && stack[i] != false) { //console log each thing in the stack
      console.log("City: " + this.vertexList[stack[i]]);
    }
  }
};

Graph.prototype.topSortHelper = function(v, visited, stack) {
  visited[v] = true; //when a vertex is passed in, mark it as visited
  for (var w in this.adjacencies[v]) { //check all the vertices adjacent to this one
    if (!visited[w]) { //check if adjacent vertex has been visited
      this.topSortHelper(visited[w], visited, stack); //re-run this function on all the adjacent vertices
    }
  }
  stack.push(v); //push this vertex to the stack
};

Graph.prototype.pathTo = function(source, v) { //source and vertex come in from program file
  if (!this.hasPathTo(v)) { //if there's no path to the vertex, return undefined
    return undefined;
  }
  var path = []; //make an empty path array
  for (var i = v; i != source; i = this.edgeTo[i]) { //set i = to v, and push every path to the array
    console.log("path.push " + i); //push path (or edge)
    path.push(i);
  }
  path.push(source); //push in the source last
  return path; //return the path array
};

Graph.prototype.hasPathTo = function(v) {
  return this.marked[v];
};

Graph.prototype.showPath = function(paths) {
  var str = '';
  while (paths.length > 0) {
    if (paths.length > 1) {
      str += paths.pop() + '-'; //builds the string that gets displayed in console
    }
    else {
      str += paths.pop();
    }
  }
  console.log("Shortest path: " + str);
};

module.exports = Vertex;
module.exports = Graph;
