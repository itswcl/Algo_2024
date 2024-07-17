/**
 * Example 1:

Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.
Example 2:

Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
Thus, [2,0,2] is returned.
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    // for (let i = 0; i < spells.length; i++) {
    //     const curSpell = spells[i];
    //     let count = 0;

    //     for (let j = 0; j < potions.length; j++) {
    //         const curPotion = potions[j];
    //         const curProduct = curSpell * curPotion
    //         if (curProduct >= success) count++;
    //     }
    //     spells[i] = count;
    // }
    // return spells

    // sorted potions
    potions.sort((a, b) => a - b)

    // iterate each spell as our target
    const search = (target) => {
        // set left and right pointer
        let left = 0;
        let right = potions.length - 1;

        while (left <= right) {
            // find our mid idx
            const mid = Math.floor((right - left) / 2) + left;

            // current product as our element * target
            const curProduct = potions[mid] * target;

            // check either we move left or right pointer if equal we will move our right
            if (curProduct >= success) right = mid - 1;
            if (curProduct < success) left = mid + 1;
        }
        // all position from the left to end is valid
        // let's say we have leftIdx to 2 potions is 5
        // so we have 5 - 2 bigger than success
        return potions.length - left;
    }

    // we count each spell and see how many bigger than success
    return spells.map((spell) => search(spell))
};