/**
 * Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let isGreatestArray: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    const currentTotalCandies = candies[i] + extraCandies;
    for (let l = 0; l < candies.length; l++) {
      const currentComparsion = candies[l];
      const isGreatest = currentTotalCandies >= currentComparsion;
      isGreatestArray[i] = isGreatest;
      if (!isGreatest) break;
    }
  }
  return isGreatestArray;
}

function kidsWithCandies1(candies: number[], extraCandies: number): boolean[] {
    // Find the maximum number of candies any kid currently has
    const maxCandies = Math.max(...candies);
    let result: boolean[] = [];

    // Compare each kid's candies + extraCandies with the maximum number of candies
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }

    return result;
}

function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  const greatestArray = candies.map((candy) => {
    return candy + extraCandies >= maxCandies;
  });
  return greatestArray;
}
