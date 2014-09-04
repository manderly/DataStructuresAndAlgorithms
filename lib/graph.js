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
  this.vertexList = [];
  var i;
  for (var i = 0; i < this.vertices; ++i) {
    this.adjacencies[i] = [];
    this.adjacencies[i].push('');
    this.marked[i] = false;
  }
};


Graph.prototype.dfs = function(v) {
  this.marked[v] = true;
  if (this.adjacencies[v] !== undefined ) {
    console.log('Visited vertex: ' + v);
  }
  this.adjacencies[v].forEach(function(w) {
    if (!this.marked[w] && w ) { this.dfs(w); }
  }, this);
};

Graph.prototype.addEdge = function(from,to) {
  this.adjacencies[from].push(to);
  this.adjacencies[to].push(from);
};

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

Graph.prototype.bfs = function(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if (v) {
      console.log('Visited vertex' + v);
    }
    if (this.adjacencies[v]) {
      this.adjacencies[v].forEach(function(w) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }, this);
    }
  }
};

Graph.prototype.topSort = function() {
  var stack = [];
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  for (var i = 0; i < this.vertices; i++) {
    if (visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] != undefined && stack[i] != false) {
      console.log(this.vertexList[stack[i]]);
    }
  }
};

Graph.prototype.topSortHelper = function(v, visited, stack) {
  visited[v] = true;
  for (var w in this.adjacencies[v]) {
    if (!visited[w]) {
      this.topSortHelper(visited[w], visited, stack);
    }
  }
  stack.push(v);
};

module.exports = Vertex;
module.exports = Graph;
