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
  if (word1 === "" || word2 === "") return word1 + word2;

  const firstLetters = word1[0] + word2[0];
  const recursiveLetters = mergeAlternately(word1.slice(1), word2.slice(1));
  return firstLetters + recursiveLetters;
}

// iterate
function _mergeAlternately(word1: string, word2: string): string {
  // result string with let variable
  let result = "";
  // find the total length
  const totalLength = word1.length + word2.length;
  // iterate thru total length
  for (let i = 0; i < totalLength; i++) {
    // while iterate if word length greater than current index we add
    if (i < word1.length) {
      result += word1[i];
    }

    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
}
