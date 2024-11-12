/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    // initial both word array
    const word1 = sentence1.split(' ')
    const word2 = sentence2.split(' ')
    const len1 = word1.length;
    const len2 = word2.length;
    let left = 0, right = 0;

    // checking from left and increase until invalid
    while (left < len1 && left < len2 && word1[left] === word2[left]) left++;
    // checking from right and increase until invalid
    while (right < len1 - left && right < len2 - left && word1[len1 - 1 - right] === word2[len2 - 1 - right]) right++

    // finally we check the total is greater than min from sen1 or 2.
    return left + right >= Math.min(len1, len2)
};

/**
 * o(n) iterate each word
 * O(n) word1 and word2 array
 */