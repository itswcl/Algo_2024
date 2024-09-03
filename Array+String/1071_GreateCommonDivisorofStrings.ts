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

    // we will need to find common divider
    const gcd = getCommonLength(str1.length, str2.length)

    // we slice/substring, if we get gcd = 0 then we slice (0,0) turn empty string
    return str1.slice(0, gcd);
};

function getCommonLength(num1: number, num2: number): number {
    // we can Math min but why not just add up with total
    const n = num1 + num2;

    // loop from hight to low to find the greatest common divider
    for (let i = n; i > 0; i--) {
        const mou1 = num1 % i;
        const mou2 = num2 % i;

        // when we find the one divider both num1 and num2
        // we update our gcd and stop loop
        if (mou1 === 0 && mou2 === 0) {
            return i
        }
    }
    return 0
}