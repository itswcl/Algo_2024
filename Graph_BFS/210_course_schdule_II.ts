/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // build our map and inDegree which represent the needs of precourse of each
  let map = new Map();
  let inDegree = new Array(numCourses).fill(0);

  for (let [a, b] of prerequisites) {
    if (!map.has(b)) map.set(b, []);
    map.get(b).push(a);
    inDegree[a]++;
  }

  // build our initial queue to add the course we dont need pre course
  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i);
  }

  // now we need to check the course doesn't need pre anymore
  let result = [];
  while (q.length) {
    const course = q.shift();
    result.push(course);

    // after precourse took (queue represent the course we took)
    // we need to check the next course degree and update degree array
    if (map.has(course)) {
      for (let nextCourse of map.get(course)) {
        inDegree[nextCourse]--;
        if (inDegree[nextCourse] === 0) q.push(nextCourse);
      }
    }
  }
  return result.length === numCourses ? result : [];
};

/**
 * O(N+M) because n courses and m precourses like veritical and edges
 * O(N+M) because the array we created for inDegree and the map
 */
