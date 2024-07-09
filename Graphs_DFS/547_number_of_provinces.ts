/**
 * Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNumDFS = function (isConnected) {
  // dfs
  let visited = new Set();
  let provinces = 0;

  const dfs = (city) => {
    visited.add(city);

    for (let neighbor = 0; neighbor < isConnected[city].length; neighbor++) {
      const isCon = isConnected[city][neighbor] === 1;
      const isNewProvinces = !visited.has(neighbor);

      if (isCon && isNewProvinces) dfs(neighbor);
    }
  };

  for (let city = 0; city < isConnected.length; city++) {
    const isNewProvinces = !visited.has(city);
    if (isNewProvinces) {
      provinces++;
      dfs(city);
    }
  }
  return provinces;
};

class UnionFind {
  root: any[];
  rank: any[];
  groups: any;
  
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size).fill(1);
    this.groups = size;
    for (let i = 0; i < size; i++) this.root[i] = i;
  }

  find(x) {
    if (this.root[x] !== x) {
      return this.find(this.root[x]);
    }
    return x;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) this.root[rootY] = rootX;
      if (this.rank[rootX] < this.rank[rootY]) this.root[rootX] = rootY;
      if (this.rank[rootX] === this.rank[rootY]) {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
      this.groups--;
    }
  }
}

var findCircleNum = function (isConnected) {
  const unionSet = new UnionFind(isConnected.length);

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j]) {
        unionSet.union(i, j);
      }
    }
  }
  return unionSet.groups;
};
