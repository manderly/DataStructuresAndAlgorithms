var Graph = new function(v) {
  this.vertices = v;
  this.vertexList = [];
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
};

Graph.prototype.dfs = function(v) {
  this.marked[v] = true;
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
};


module.exports = Graph;
