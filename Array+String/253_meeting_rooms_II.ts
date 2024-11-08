/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // sort and create both start end array
  const starts = intervals.map((int) => int[0]).sort((a, b) => a - b);
  const ends = intervals.map((int) => int[1]).sort((a, b) => a - b);

  // initial our count
  let rooms = 0;

  // pointer for ends
  let endPointer = 0;

  // now iterate thru starts
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    const end = ends[endPointer];
    // compare start and end if start greater end we have gap between current to next
    if (start >= end) {
      //increase endpointer
      endPointer++;
    } else {
      // if we dont see gap we increase room meaning we need another room
      rooms++;
    }
  }
  return rooms;
};

/**
 * O(nlogn) because sort
 * O(n) space n keep without adding extra space
 */