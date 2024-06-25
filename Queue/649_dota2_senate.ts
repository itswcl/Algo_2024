/**
 * Example 1:

Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
Example 2:

Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

 */

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate: string): string {
  // initial our quenes and last Idx
  // RDD
  let qR: number[] = []; // [0] -> [3] -> []
  let qD: number[] = []; // [1, 2] -> [2] -> [4]
  let afterLastIdx = senate.length; // 3 -> 4 -> 5

  for (let i = 0; i < senate.length; i++) {
    const ele = senate[i];
    if (ele === "R") qR.push(i);
    if (ele === "D") qD.push(i);
  }

  // we will continue to look until ne of queue empty
  while (qR.length !== 0 && qD.length !== 0) {
    const rIdx = qR.shift(); // 0 -> 3
    const dIdx = qD.shift(); // 1 -> 2

    // whoever smaller win and add to queue with our after last idx
    if (rIdx! > dIdx!) {
      // 0 > 1 -> 3 > 2
      qD.push(afterLastIdx); // [4]
    } else {
      qR.push(afterLastIdx); // [3]
    }
    // each time we increase our latest idx because we move our winner to end of string
    afterLastIdx++;
  }
  // whatever quene left is our winner
  return qR.length ? "Radiant" : "Dire";
};
