/**
 * Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */

// failed with case string1="ABCDEF" string2="ABC" expect=""
function gcdOfStrings(str1: string, str2: string): string {
  let result = str1;
  if (str1.indexOf(str2) === -1) return "";
  result = result.replace(str2, "");

  return result;
}

// solution from leetcode
// str1 ABCABC -> ABCDEF
// str2 ABC -> ABC
function gcdOfStrings2(str1: string, str2: string): string {
    // ABCDEF + ABC !== ABC + ABCDEF => false
    if (str1 + str2 !== str2 + str1) return ""
    // 4 -> 2
    let currentIndex = str1.length;
    // 2 -> 0
    let reminder = str2.length;

    // countine loop while reminder not 0
    while (reminder) {
        let tempReminder = reminder;
        reminder = currentIndex % reminder
        currentIndex = tempReminder
    }

    // substring(0, 2) -> "AB"
    return str1.substring(0, currentIndex)
};

// own solution with find greatest common length
function gcdOfStrings3(str1: string, str2: string): string {
    // first check if str1+str2 is same if not we can stop
    // no divider if it's not same
    if (str1 + str2 !== str2 + str1) return ""

    // set a and b as both length we will find this common length
    let a = str1.length
    let b = str2.length

    // now we will need to find common divider
    const gcd = getCommonLength(a, b)

    // now we slice or substring
    return str1.slice(0, gcd);
};

function getCommonLength(num1: number, num2: number): number {
    // it's easier to understand we set as 0
    let gcd: number = 0;
    // we can Math min but why not just add up with total
    const totalLength = num1 + num2;

    // loop from hight to low to find the greatest common divider
    for (let i = totalLength; i > 0; i--) {
        const mou1 = num1 % i;
        const mou2 = num2 % i;

        // when we find the one divider both num1 and num2
        // we update our gcd and stop loop
        if (mou1 === 0 && mou2 === 0) {
            gcd = i;
            break
        }
    }
    return gcd
}