/**
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r


Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 */

// recursive
function mergeAlternately(word1: string, word2: string): string {
  // base case either one is empty
  if (word1 === "" || word2 === "") return word1 + word2;
  // we will find our starting point since we need to recursive slice from 1
  const firstLetters = word1[0] + word2[0];

  // find our rest of letters with recursive word.slice(1) both word1 and word2
  const recursiveLetters = mergeAlternately(word1.slice(1), word2.slice(1));

  // finally we combine the base to our recurisve result
  return firstLetters + recursiveLetters;
}

// iterate
function _mergeAlternately(word1: string, word2: string): string {
  // initial our total length
  // initial result string
  const n = word1.length + word2.length;
  let result = "";
  // iterate total length
  for (let i = 0; i < n; i++) {
    // check word1 length with current idx
    if (word1.length > i) {
      // add to result
      result += word1[i];
    }
    // check word2 length with current idx
    if (word2.length > i) {
      // add to result
      result += word2[i];
    }
  }
  // result
  return result;
}
