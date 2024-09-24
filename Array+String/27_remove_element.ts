/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // initial left and right pointer
    let left = 0;
    let right = 0;

    // iterate thru
    while (right < nums.length) {
        // if we not meet our val 
        if (nums[right] != val) {
            // we update our left with right element 
            nums[left] = nums[right];
            // increase left
            left++
        }
        // each run we increase right
        right++
    }
    //in the end we gets left meaning how many times we have not meet the val
    return left;
};