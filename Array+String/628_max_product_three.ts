/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // we initial our max 1-3 and min 1-2
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    let min1 = Infinity
    let min2 = Infinity

    // iterate thru num
    for (let num of nums) {
        // continuesly update max 1 - 3 when num is bigger than current max
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        // we update min 1 - 2 when num is less than current min
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1)
};

/**
 * O(N) iterate thru nums
 * O(1) we onlu initial the max and min
 */