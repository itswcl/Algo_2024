/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // get starts and ends array whihc sorted
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  // initial rooms and endPointer
  let rooms = 0;
  // endpointer is to accomplish moving ends
  let endPointer = 0;

  // iterate starts
  for (let i = 0; i < starts.length; i++) {
    // if start greater euqal end mean we dont need extra room
    if (starts[i] >= ends[endPointer]) {
      endPointer++;
    } else {
      // if not we need room
      rooms++;
    }
  }

  // get room
  return rooms;
};

/**
 * o(n log n) due to sorting
 * O(n) due to new array both starts and ends
 */
