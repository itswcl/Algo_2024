/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // initial map visited and cycle
  let map = new Map();
  let visited = new Set();
  let cycle = new Set();

  // build our map
  for (let [next, prev] of prerequisites) {
    if (!map.has(prev)) map.set(prev, []);
    map.get(prev).push(next);
  }

  const dfs = (course) => {
    // from start we will check if the course is cycle
    if (cycle.has(course)) return false; // false meaning we find the cylce
    if (visited.has(course)) return true; // true we've visited and no cycle;

    // we assume it's cycler
    cycle.add(course);
    if (map.has(course)) {
      for (let nextCourse of map.get(course)) {
        if (!dfs(nextCourse)) return false;
      }
    }

    // after we iterate from the nextCourse we dont hit cycle 
    cycle.delete(course);
    // and consider it's added
    visited.add(course);
    return true;
  };

  // we visit each course from 'key'
  // if we get false meaing we hit cycle
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
