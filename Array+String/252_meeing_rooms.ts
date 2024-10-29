/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  // if no meeting
  if (!intervals.length) return true;

  // sort the meeting based on start
  intervals.sort((a, b) => a[0] - b[0]);

  // iterate thru intervals
  for (let i = 0; i < intervals.length - 1; i++) {
    // if current end is greater than next start we can't attend
    const [curStart, curEnd] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];

    if (curEnd > nextStart) return false;
  }
  // if we pass all we can attend all meetings
  return true;
};


/**
 * time is O(n log n) becasue the sort is n log n and the for loog is n
 * space is O(1) because no new input and consant result
 */